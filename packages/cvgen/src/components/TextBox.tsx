// src/components/TextBox.tsx
export function TextBox({ text }: { text: string }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "8px",
      }}
    >
      {text}
    </div>
  );
}