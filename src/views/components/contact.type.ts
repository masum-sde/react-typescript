export interface IContact {
  name: string;
  email: string;
  handleRemove: (email: string) => void;
}
