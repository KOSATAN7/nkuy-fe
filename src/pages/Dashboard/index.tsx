import PhoneField from "@/components/Field/PhoneField";
import SelectField from "@/components/Field/SelectField";
import TextField from "@/components/Field/TextField";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

const Dashboard = () => {
  return (
    <div className="">
        <TextField title="Kuda Liar" />
        <PhoneField  />
        <SelectField options={options} title="Kuda Kakak"  />
    </div>
  )
}

export default Dashboard;