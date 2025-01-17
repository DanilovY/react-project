import { BsApple } from 'react-icons/bs';

export default function UserMenu({ name }) {
  return (
    <div>
      <p>
        <BsApple className="my-icon" size="24" color="yellow" /> {name}
      </p>
    </div>
  );
}
