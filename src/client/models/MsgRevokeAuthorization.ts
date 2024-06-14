import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosAuthzV1beta1MsgRevoke as ProtoMsgRevoke } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgRevoke>>;

export class MsgRevokeAuthorization<T> implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgRevoke({
      ...this.data,      
    });
  }

  public toAmino() {
    return {
      type: "authz/MsgRevoke",
      value: {
        msg_type_url: this.data.msgTypeUrl,
        ...this.data,
      }
    };
  }
}
