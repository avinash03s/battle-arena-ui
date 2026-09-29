import type {
  ClientMessage,
  ServerMessage,
} from "./messageTypes";

export type MessageListener = (
  message: ServerMessage
) => void;

export class WebSocketClient {
  private socket: WebSocket | null = null;

  private messageListeners = new Set<MessageListener>();

  private reconnectTimer: number | null = null;

  private shouldReconnect = true;

  private reconnectAttempts = 0;

  private readonly maxReconnectDelay = 5000;

  connect(url: string): void {
    this.shouldReconnect = true;

    if (
      this.socket &&
      (
        this.socket.readyState === WebSocket.OPEN ||
        this.socket.readyState === WebSocket.CONNECTING
      )
    ) {
      return;
    }

    this.createConnection(url);
  }

  private createConnection(url: string): void {
    try {
      this.socket = new WebSocket(url);
    } catch (error) {
      console.error("Unable to create WebSocket:", error);
      this.scheduleReconnect(url);
      return;
    }

    this.socket.onopen = () => {
      console.log("Battle Arena WebSocket connected");

      this.reconnectAttempts = 0;
    };

    this.socket.onmessage = (event) => {
      try {
        const message = JSON.parse(
          event.data
        ) as ServerMessage;

        if (!message?.type) {
          return;
        }

        this.messageListeners.forEach(
          (listener) => listener(message)
        );
      } catch (error) {
        console.error(
          "Invalid WebSocket message:",
          error
        );
      }
    };

    this.socket.onerror = (error) => {
      console.error(
        "Battle Arena WebSocket error:",
        error
      );
    };

    this.socket.onclose = () => {
      console.warn(
        "Battle Arena WebSocket disconnected"
      );

      this.socket = null;

      if (this.shouldReconnect) {
        this.scheduleReconnect(url);
      }
    };
  }

  private scheduleReconnect(url: string): void {
    if (!this.shouldReconnect) {
      return;
    }

    if (this.reconnectTimer !== null) {
      return;
    }

    const delay = Math.min(
      1000 *
        Math.pow(2, this.reconnectAttempts),
      this.maxReconnectDelay
    );

    this.reconnectAttempts += 1;

    this.reconnectTimer = window.setTimeout(() => {
      this.reconnectTimer = null;

      this.createConnection(url);
    }, delay);
  }

  send(
    type: ClientMessage["type"],
    data?: unknown
  ): boolean {
    if (
      !this.socket ||
      this.socket.readyState !== WebSocket.OPEN
    ) {
      return false;
    }

    const message: ClientMessage = {
      type,
      data: data ?? {},
    };

    this.socket.send(
      JSON.stringify(message)
    );

    return true;
  }

  subscribe(
    listener: MessageListener
  ): () => void {
    this.messageListeners.add(listener);

    return () => {
      this.messageListeners.delete(listener);
    };
  }

  isConnected(): boolean {
    return (
      this.socket?.readyState ===
      WebSocket.OPEN
    );
  }

  disconnect(): void {
    this.shouldReconnect = false;

    if (this.reconnectTimer !== null) {
      window.clearTimeout(
        this.reconnectTimer
      );

      this.reconnectTimer = null;
    }

    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}