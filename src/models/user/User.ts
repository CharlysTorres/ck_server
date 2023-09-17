export interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  admin: number;
}

export class User {
  private props: UserProps;

  get id () {
    return this.props.id;
  }

  get admin () {
    return this.props.admin;
  }

  get name () {
    return this.props.name;
  }

  get email () {
    return this.props.email;
  }

  get password () {
    return this.props.password;
  }

  get createdAt () {
    return this.props.createdAt;
  }

  get updatedAt () {
    return this.props.updatedAt;
  }

  constructor (props: UserProps) {
    const { createdAt, updatedAt } = props;

    if(createdAt < new Date()) {
      throw new Error("invalid createdAt");
      
    }

    if(updatedAt < createdAt) {
      throw new Error('invalid updatedAt');
    }
  
    this.props = props;
  }
}