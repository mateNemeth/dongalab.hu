import { ImageProps } from './global';

export interface NavLinkProps {
  sectionId: string;
  name: string;
  id: number;
}

export interface NavbarProps {
  navlinks: NavLinkProps[];
  logo: ImageProps;
}
