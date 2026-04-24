type GridBoxProps = {
  numberOfColumns?: number;
  numberOfRows?: number;
};
export default function GridBox(props: GridBoxProps) {
  const { numberOfColumns = 10, numberOfRows = 10 } = props;
  return (
    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-10">
      {Array.from({ length: numberOfColumns * numberOfRows }).map(
        (_, index) => (
          <div
            key={index}
            className="border-primary/30 border"
            style={{ opacity: 0.8844457791279534 }}
          />
        ),
      )}
    </div>
  );
}
