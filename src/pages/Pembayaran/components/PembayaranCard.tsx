import { List, ListItem, Radio, RadioGroup } from "@mui/material";

interface PembayaranCardProps {
  icon: React.ReactNode;
  title: string;
  images: string[];
  items: string[];
  borderColor?: string;
  selectedPayment: string | null;
  onPaymentChange: (value: string) => void;
}

const PembayaranCard = ({
  icon,
  title,
  images,
  items,
  borderColor = "border-gray-300",
  selectedPayment,
  onPaymentChange,
}: PembayaranCardProps) => {
  return (
    <div className={`border ${borderColor} rounded-lg p-6`}>
      <div className="flex flex-col items-center justify-center mb-6">
        {icon}
        <h2 className="font-bold text-xl">{title}</h2>
      </div>

      <RadioGroup
        aria-label="Payment method"
        value={selectedPayment}
        onChange={(e) => onPaymentChange(e.target.value)}
      >
        <List sx={{ minWidth: 240, gap: "1rem", paddingY: "1rem", borderRadius: "8px" }}>
          {items.map((item, index) => (
            <ListItem
              key={item}
              sx={{
                boxShadow: "gray 0px 0px 2px 0px",
                display: "flex",
                alignItems: "center",
                padding: "12px",
                marginBottom: "8px",
                borderRadius: "8px",
              }}
            >
              <Radio value={item} sx={{ marginRight: 4 }} />
              <img
                src={images[index]}
                alt={item}
                style={{ width: 180, height: 60, objectFit: "contain" }}
              />
            </ListItem>
          ))}
        </List>
      </RadioGroup>
    </div>
  );
};

export default PembayaranCard;