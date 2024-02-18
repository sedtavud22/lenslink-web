import { format } from "date-fns";
import useRequest from "../hooks/use-request";
import InfoBlock from "./InfoBlock";
import RequestAction from "./RequestAction";

function RequestInfo() {
  const { requestInfo } = useRequest();

  return (
    <div className="flex flex-col gap-6 p-4 border border-accent rounded-lg">
      <h2 className="text-2xl font-semibold">Info</h2>

      <div className="flex gap-56 flex-wrap">
        <InfoBlock title="Client">
          {requestInfo.user?.firstName} {requestInfo.user?.lastName}
        </InfoBlock>

        <InfoBlock title="Date">
          {Object.keys(requestInfo).length > 0
            ? format(requestInfo.createdAt, "PP")
            : requestInfo?.createdAt}
        </InfoBlock>
      </div>

      <InfoBlock title="Mobile Number">{requestInfo?.clientMobile}</InfoBlock>
      <InfoBlock title="Social Media">
        {requestInfo?.clientSocialMedia}
      </InfoBlock>

      <InfoBlock title="Description">{requestInfo?.description}</InfoBlock>
      <RequestAction request={requestInfo} />
    </div>
  );
}

export default RequestInfo;
