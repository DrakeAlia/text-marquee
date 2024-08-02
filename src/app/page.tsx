import "@/styles/globals.css";

export default function Home() {
  return (
    <div className="wrapper">
      <div
        className="marquee-container"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div className="marquee-text fadeout-horizontal">
          <div className="marquee-text-track">
            <p>Javascript</p>
            <p>Typescript</p>
            <p>CSS</p>
            <p>TailwindCSS</p>
            <p>Next.js</p>
            <p>Accessibility</p>
            <p>React</p>
            <p>Angular</p>
            <p aria-hidden="true">Javascript</p>
            <p aria-hidden="true">Typescript</p>
            <p aria-hidden="true">CSS</p>
            <p aria-hidden="true">TailwindCSS</p>
            <p aria-hidden="true">Next.js</p>
            <p aria-hidden="true">Accessibility</p>
            <p aria-hidden="true">React</p>
            <p aria-hidden="true">Angular</p>
          </div>
        </div>
      </div>
      <div className="marquee-text fadeout-horizontal">
        <div
          style={
            {
              "--direction": "reverse",
              "--speed": "20s",
            } as React.CSSProperties
          }
          className="marquee-text-track"
        >
          <p>Javascript</p>
          <p>Typescript</p>
          <p>CSS</p>
          <p>TailwindCSS</p>
          <p>Next.js</p>
          <p>Accessibility</p>
          <p>React</p>
          <p>Angular</p>
          <p aria-hidden="true">Javascript</p>
          <p aria-hidden="true">Typescript</p>
          <p aria-hidden="true">CSS</p>
          <p aria-hidden="true">TailwindCSS</p>
          <p aria-hidden="true">Next.js</p>
          <p aria-hidden="true">Accessibility</p>
          <p aria-hidden="true">React</p>
          <p aria-hidden="true">Angular</p>
        </div>
      </div>
    </div>
    // <div className="wrapper">
    //   <div className="marquee-container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
    //   <div className="marquee-text rotate-left fadeout-horizontal">
    //     <div className="marquee-text-track">
    //       <p>Javascript</p>
    //       <p>Typescript</p>
    //       <p>CSS</p>
    //       <p>TailwindCSS</p>
    //       <p>Next.js</p>
    //       <p>Accessibility</p>
    //       <p>React</p>
    //       <p>Angular</p>
    //       <p aria-hidden="true">Javascript</p>
    //       <p aria-hidden="true">Typescript</p>
    //       <p aria-hidden="true">CSS</p>
    //       <p aria-hidden="true">TailwindCSS</p>
    //       <p aria-hidden="true">Next.js</p>
    //       <p aria-hidden="true">Accessibility</p>
    //       <p aria-hidden="true">React</p>
    //       <p aria-hidden="true">Angular</p>
    //     </div>
    //     </div>
    //   </div>
    //   <div className="marquee-text rotate-right fadeout-horizontal">
    //     <div
    //       style={
    //         {
    //           "--direction": "reverse",
    //           "--speed": "20s",
    //         } as React.CSSProperties
    //       }
    //       className="marquee-text-track"
    //     >
    //       <p>Javascript</p>
    //       <p>Typescript</p>
    //       <p>CSS</p>
    //       <p>TailwindCSS</p>
    //       <p>Next.js</p>
    //       <p>Accessibility</p>
    //       <p>React</p>
    //       <p>Angular</p>
    //       <p aria-hidden="true">Javascript</p>
    //       <p aria-hidden="true">Typescript</p>
    //       <p aria-hidden="true">CSS</p>
    //       <p aria-hidden="true">TailwindCSS</p>
    //       <p aria-hidden="true">Next.js</p>
    //       <p aria-hidden="true">Accessibility</p>
    //       <p aria-hidden="true">React</p>
    //       <p aria-hidden="true">Angular</p>
    //     </div>
    //   </div>
    // </div>
  );
}
