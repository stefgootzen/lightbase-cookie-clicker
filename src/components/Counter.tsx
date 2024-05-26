type CounterProps = {
  count: number;
};

export default function Counter({ count }: CounterProps) {
  return (
    <div>
      <p className="heading text-6xl font-medium text-center">{count}</p>
      <p className="text-xl text-gray-500 font-medium text-center">Cookies</p>
    </div>
  );
}
