import React, { useEffect } from "react";
import Swal from "sweetalert2";

interface SweetAlertProps {
  show?: boolean;
  title?: string;
  text?: string;
  timer?: number;
  type?: "success" | "error" | "warning" | "info" | "question";
  confirmButtonText?: string;
  showCancelButton?: boolean;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
}

const SweetAlert: React.FC<SweetAlertProps> = ({
  show,
  title,
  text,
  type,
  confirmButtonText,
  showCancelButton,
  cancelButtonText,
  onConfirm,
  onCancel,
  confirmButtonColor,
  cancelButtonColor,
}) => {
  useEffect(() => {
    const showAlert = async () => {
      const result = await Swal.fire({
        title: title || "",
        text: text || "",
        icon: type || "info",
        showCancelButton: showCancelButton || false,
        confirmButtonText: confirmButtonText || "OK",
        cancelButtonText: cancelButtonText || "Cancel",
        confirmButtonColor: confirmButtonColor || "#1876D1",
        cancelButtonColor: cancelButtonColor || "#D32F2F",
      });

      if (result.isConfirmed) {
        if (onConfirm) {
          onConfirm();
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        if (onCancel) {
          onCancel();
        }
      }
    };

    if (show) {
      showAlert();
    }
  }, [show]);

  return null;
};

export default SweetAlert;
