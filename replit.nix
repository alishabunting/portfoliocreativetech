{
  description = "Node.js environment for React app";
  deps = [
    pkgs.nodejs-20_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
  ];
} 