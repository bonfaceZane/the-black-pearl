if (process.env.npm_execpath && !process.env.npm_execpath.includes("bun")) {
    console.error("You must use Bun to install dependencies in this project");
    console.error("Install Bun: curl -fsSL https://bun.sh/install | bash");
    process.exit(1);
}
