import InfoBlock from "./InfoBlock";
import RequestAction from "./RequestAction";

function RequestInfo() {
  return (
    <div className="flex flex-col gap-6 p-4 border border-accent rounded-lg">
      <h2 className="text-2xl font-semibold">Info</h2>

      <div className="flex gap-56 flex-wrap">
        <InfoBlock title="Client">Pongsakorn</InfoBlock>
        <InfoBlock title="Date">24 Jan 2024</InfoBlock>
      </div>

      <InfoBlock title="Mobile Number">0812345678</InfoBlock>
      <InfoBlock title="Social Media">Lineid: bigbasori</InfoBlock>

      <InfoBlock title="Description">
        fasfafewfwehfiwehfiwehfiwehnfwihfwihfwihfwiufhweiufhwuifhwuifh3wufhiuhfwihwhefihue
      </InfoBlock>
      <RequestAction />
    </div>
  );
}

export default RequestInfo;
