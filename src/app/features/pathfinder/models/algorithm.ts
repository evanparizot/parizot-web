export class AlgorithmOption {
  name?: string;
  disable?: boolean;
  description?: string;
}

export class AlgorithmOptions {
  allowDiagonal?: AlgorithmOption = {
    name: "Allow Diagonal"
  };
  biDirectional?: AlgorithmOption = {
    name: "Bi-Directional"
  };
  dontCrossCorners?: AlgorithmOption = {
    name: "Don't Cross Corners"
  };
  weight?: number;
}

export enum Heuristics {
  Manhattan = 1,
  Euclidean = 2,
  Octile = 3,
  Chebyshev = 4
}

export class Settings {
  algorithm: string;
  heuristic: string;
  allowDiagonal: boolean;
  biDirectional: boolean;
  dontCrossCorners: boolean;
  weight: number;
}

export class Algorithm {
  name: string;
  description: string;
  url: string;
  heuristics: boolean;
  options?: AlgorithmOptions;
}
