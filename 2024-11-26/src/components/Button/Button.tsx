import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  quandoClica: () => void;
};

export function Button(props: ButtonProps) {
  return (
    <button onClick={props.quandoClica} className="adicionar">
      {props.children}
    </button>
  );
}