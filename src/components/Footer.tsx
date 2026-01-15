 import React from "react";
import { useTranslation, Trans } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-100 text-gray-600 text-sm py-4 text-center">
      <Trans i18nKey="footer.copyright" values={{ year: year }}>
        © {{year}} <span className="text-gray-700 font-medium">Votre Plateforme</span>. Tous droits réservés.
      </Trans>
    </div>
  );
}
