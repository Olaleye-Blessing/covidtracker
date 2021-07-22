import Image from "next/image";

const formatFormOptionLabel = ({ label, flag, icon }) => (
    <div className="flex items-center justisfy-start">
        {flag && (
            <figure className="mr-3 pt-1">
                <Image
                    src={flag}
                    width={20}
                    height={16}
                    alt={`${label}'s flag`}
                />
            </figure>
        )}
        {icon && <figure className="mr-3 pt-1">{icon}</figure>}
        <div>{label}</div>
    </div>
);

export default formatFormOptionLabel;
