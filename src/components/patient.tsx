type PatientProps = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export function Patient({
  id,
  firstName,
  lastName,
  email,
  phone,
  message,
}: PatientProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="text" />
    </li>
  );
}
