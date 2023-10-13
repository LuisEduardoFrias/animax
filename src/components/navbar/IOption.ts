
export default interface IOption {
  name: string;
  href: string;
  sub: IOption[] | null;
  icon: string | null;
}