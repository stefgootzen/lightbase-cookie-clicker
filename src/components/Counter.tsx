import { useCounter } from "../hooks/useCounter";

type CounterProps = {
  initialCount: number;
};

export default function Counter({ initialCount = 0 }: CounterProps) {
  const { count, incrementByOne, isAutomated, toggleAutomate, reset } = useCounter(initialCount);

  return (
    <div className={"flex flex-col gap-16 text-center"}>
      <div>
        <p className="heading text-6xl font-medium ">{count}</p>
        <p className="text-xl text-gray-500 font-medium ">Cookies</p>
      </div>

      <img
        className={"self-center"}
        onClick={incrementByOne}
        height={200}
        width={200}
        src="/cookie.svg"
        alt="Add cookie"
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <div onClick={toggleAutomate} className={"btn bg-blue-500 text-blue-100 hover:bg-blue-600"}>
          Turn automate {isAutomated ? "off" : "on"}
        </div>
        <div onClick={reset} className="btn bg-white text-gray-700 hover:bg-gray-100 hover:underline">
          Reset
        </div>
      </div>
    </div>
  );
}
