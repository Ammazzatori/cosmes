import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosAuthzV1beta1MsgExec as ProtoMsgExec } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgExec>>;

export class MsgExec implements Adapter {
  private readonly data: Data;
  private readonly isLegacy: boolean = false;

  constructor(data: Data, isLegacy = false) {
    this.data = data;
    this.isLegacy = isLegacy;
  }

  public toProto() {
    return new ProtoMsgExec({
      grantee: this.data.grantee,
      msgs: this.data.msgs.map((msg: any) => {
        return {
          typeUrl: `/${msg.toProto().getType().typeName}`,
          value: msg.toProto().toBinary()
        };
      }),
    });
  }

  public toAmino() {
    return {
      type: this.isLegacy ? "msgauth/MsgExecAuthorized" : "cosmos-sdk/MsgExec",
      value: {
        grantee: this.data.grantee,
        msgs: this.data.msgs.map((msg: any) => {
          //return msg.toAmino();
          return {
            '@type': `/${msg.toProto().getType().typeName}`,
            ...msg.toAmino().value
          };
        })
      },
    };
  }
}