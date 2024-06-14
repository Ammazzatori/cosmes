import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosGovV1MsgVote as ProtoMsgVote } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgVote>>;

export class MsgVote implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgVote(this.data);
  }

  public toAmino() {
    return {
      type: "cosmos-sdk/v1/MsgVote",
      value: {
        proposal_id: this.data.proposalId,
        voter: this.data.voter,
        option: this.data.option,
      },
    };
  }
}