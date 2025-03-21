document.addEventListener("DOMContentLoaded", () => {
  // Define the honeycomb structure
  const honeycomb = [4, 5, 6, 7, 6, 5, 4];

  // Define skill icon classes
  const skillIconClasses = [
    "skill-icons--androidstudio-light",
    "skill-icons--vite-light",
    "skill-icons--aws-light",
    "skill-icons--bootstrap",
    "skill-icons--java-light",
    "skill-icons--css",
    "skill-icons--docker",
    "skill-icons--figma-light",
    "skill-icons--flutter-light",
    "skill-icons--git",
    "skill-icons--github-light",
    "skill-icons--html",
    "skill-icons--javascript",
    "skill-icons--laravel-light",
    "skill-icons--linux-light",
    "skill-icons--mongodb",
    "skill-icons--mysql-light",
    "skill-icons--nodejs-light",
    "skill-icons--materialui-light",
    "skill-icons--python-light",
    "skill-icons--react-light",
    "skill-icons--sass",
    "skill-icons--tailwindcss-light",
    "skill-icons--typescript",
    "skill-icons--vscode-light",
    "skill-icons--vuejs-light",
    "skill-icons--wordpress",
    "skill-icons--yarn-light",
    "skill-icons--php-light",
    "skill-icons--graphql-light",
    "skill-icons--postman",
    "skill-icons--illustrator",
    "skill-icons--redux",
    "skill-icons--nextjs-light",
    "skill-icons--expressjs-light",
    "skill-icons--django",
    "skill-icons--webflow"
  ];

  // Repeat the skill icons if needed
  const allIcons = [];
  for (let i = 0; i < 60; i++) {
    allIcons.push(skillIconClasses[i % skillIconClasses.length]);
  }

  const container = document.getElementById("container");
  const vignette = document.getElementById("vignette");

  // Generate the honeycomb structure
  let iconIndex = -1;

  honeycomb.forEach((columnSize, columnIndex) => {
    const column = document.createElement("div");
    column.className = "flex flex-col items-center mx-[-0.2vmin]";
    column.dataset.column = columnIndex;

    for (let cellIndex = 0; cellIndex < columnSize; cellIndex++) {
      iconIndex++;
      const hexagon = document.createElement("div");

      // Use fixed color #f4f2ed for all hexagons
      hexagon.className = `hexagon w-[8vmin] p-[2px] aspect-square relative bg-opacity-0 backdrop-blur-lg cursor-pointer`;
      hexagon.style.backgroundColor = "#f4f2ed00";
      hexagon.dataset.index = cellIndex + 1;

      // Add icon container
      const iconContainer = document.createElement("div");
      iconContainer.className =
        "absolute inset-0 grid place-items-center text-[2.5vmin] filter brightness-105";

      // Create a span with the skill icon class
      const iconSpan = document.createElement("span");
      iconSpan.className = ` ${allIcons[iconIndex]}`;

      iconContainer.appendChild(iconSpan);
      hexagon.appendChild(iconContainer);
      column.appendChild(hexagon);
    }

    container.appendChild(column);
  });

  // Set up the ripple effect
  const hexagons = container.querySelectorAll(".hexagon");
  const hexagonElements = Array.from(hexagons);

  const ripple = (target) => {
    // Remove the check to allow multiple ripples

    const targetRect = target.getBoundingClientRect();
    const data = hexagonElements
      .map((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;
        const distance = Math.round(
          Math.sqrt(
            Math.pow(rect.x - targetRect.x, 2) +
              Math.pow(rect.y - targetRect.y, 2)
          )
        );
        return { element, rect, centerX, centerY, distance };
      })
      .sort((a, b) =>
        a.distance > b.distance ? 1 : a.distance < b.distance ? -1 : 0
      );

    const [max] = data.slice(-1);
    data.forEach((item) =>
      item.element.style.setProperty(
        "--ripple-factor",
        `${(item.distance * 100) / max.distance}`
      )
    );

    container.classList.add("show-ripple");

    const cleanUp = () => {
      requestAnimationFrame(() => {
        container.classList.remove("show-ripple");
        data.forEach((item) =>
          item.element.style.removeProperty("--ripple-factor")
        );
        max.element.removeEventListener("animationend", cleanUp);
      });
    };

    max.element.addEventListener("animationend", cleanUp);
  };

  // Set up automatic ripple every 10 seconds
  const triggerRipple = () => {
    const randomHexagon =
      hexagonElements[Math.floor(Math.random() * hexagonElements.length)];
    ripple(randomHexagon);
  };

  // Trigger initial ripple
  setTimeout(triggerRipple, 500);

  // Set up interval for continuous ripple effect
  setInterval(triggerRipple, 10000);

  // Add background image to vignette
  vignette.style.background =
    "radial-gradient(at center, transparent 80%, black), linear-gradient(to top, rgba(0, 0, 0, 0.3) 70%, transparent)";
});
