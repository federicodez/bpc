type PatientProps = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  number: string;
};

export function Patient({
  id,
  firstname,
  lastname,
  email,
  number,
}: PatientProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="text" />
    </li>
  );
}
