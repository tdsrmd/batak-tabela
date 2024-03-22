type PlayerProps = { id: string; name: string; score: number[] };

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
};

type LocalStorageProps = {
  key: string;
  initialValue: PlayerProps[];
};

type PlayersContextProps = {
  players: PlayerProps[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerProps[]>>;
  handleRemovePlayer: (name: string) => () => void;
  addPlayer: (name: string) => void;
  handleResetScores: () => void;
  handleFinishGame: () => void;
  addScore: (value: number, playerId: string) => void;
  setNegativeValue: React.Dispatch<React.SetStateAction<boolean>>;
  negativeValue: boolean;
  removeScore: (playerId: string, index: number) => void;
};
