interface CountdownScreenProps {
  value: number;
}

function CountdownScreen({
  value,
}: CountdownScreenProps) {
  return (
    <div className="screen countdown-screen">
      <div className="countdown-number">
        {value > 0
          ? value
          : "GO!"}
      </div>

      <p className="countdown-label">
        GET READY!
      </p>
    </div>
  );
}

export default CountdownScreen;