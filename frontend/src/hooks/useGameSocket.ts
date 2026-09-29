import {
  useCallback,
  useEffect,
  useRef,
} from "react";

import {
  WebSocketClient,
} from "../websocket/WebSocketClient";

import type {
  ServerMessage,
} from "../websocket/messageTypes";

const DEFAULT_WS_URL =
  "ws://localhost:8080/game";

export function useGameSocket(
  onMessage: (
    message: ServerMessage
  ) => void
) {
  const clientRef =
    useRef<WebSocketClient | null>(null);

  const messageHandlerRef =
    useRef(onMessage);

  messageHandlerRef.current =
    onMessage;

  useEffect(() => {
    const client =
      new WebSocketClient();

    clientRef.current = client;

    const unsubscribe =
      client.subscribe(
        (message) => {
          messageHandlerRef.current(
            message
          );
        }
      );

    const wsUrl =
      import.meta.env.VITE_WS_URL ||
      DEFAULT_WS_URL;

    client.connect(wsUrl);

    return () => {
      unsubscribe();

      client.disconnect();

      clientRef.current = null;
    };
  }, []);

  const send = useCallback(
    (
      type:
        | "joinGame"
        | "input"
        | "shoot"
        | "reload"
        | "leaveMatch",
      data?: unknown
    ) => {
      return (
        clientRef.current?.send(
          type,
          data
        ) ?? false
      );
    },
    []
  );

  return {
    send,

    isConnected: () =>
      clientRef.current?.isConnected() ??
      false,
  };
}