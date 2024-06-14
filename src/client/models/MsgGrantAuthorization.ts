import { PlainMessage } from "@bufbuild/protobuf";
import { utf8 } from "cosmes/codec";
import { CosmosAuthzV1beta1MsgGrant as ProtoMsgGrant, CosmosStakingV1beta1StakeAuthorization as ProtoStakeAuthorization, CosmosBankV1beta1SendAuthorization as ProtoSendAuthorization, CosmosAuthzV1beta1GenericAuthorization as ProtoGenericAuthorization } from "cosmes/protobufs"; // Adjust the import path as necessary

import { DeepPrettify, Prettify } from "../../typeutils/prettify"; // Adjust the import path as necessary
import { Adapter } from "./Adapter"; // Adjust the import path as necessary

// Adjust the type definition to match the structure of MsgGrant
type Data = DeepPrettify<PlainMessage<ProtoMsgGrant>>;

export class MsgGrantAuthorization implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    // Adjust the ProtoMsgGrant instantiation to match the structure of MsgGrant
    return new ProtoMsgGrant(this.data);
  }

  public toAmino() {
    if (!this.data.grant?.authorization?.value) {
      throw new Error("Missing authorization value");
    }

    let proto;
    let grant_auth;
    switch(this.data.grant?.authorization?.typeUrl) {
      case "/cosmos.staking.v1beta1.StakeAuthorization":
        proto = ProtoStakeAuthorization.fromBinary(this.data.grant.authorization.value);
        grant_auth = {
          "@type": "/" + proto.getType().typeName,
          authorization_type: proto.authorizationType,
          allow_list: proto.validators?.case === "allowList" ? proto.validators.value : undefined,
          deny_list: proto.validators?.case === "denyList" ? proto.validators.value : undefined,
          ...this.data.grant?.authorization,
        };
        break;
      case "/cosmos.authz.v1beta1.GenericAuthorization":
        proto = ProtoGenericAuthorization.fromBinary(this.data.grant.authorization.value);
        grant_auth = {
          "@type": "/" + proto.getType().typeName,
          msg: proto.msg,
          ...this.data.grant?.authorization,
        };
        break;
      case "/cosmos.authz.v1beta1.SendAuthorization":
        proto = ProtoSendAuthorization.fromBinary(this.data.grant.authorization.value);
        grant_auth = {
          "@type": "/" + proto.getType().typeName,
          spend_limit: proto.spendLimit,
          ...this.data.grant?.authorization,
        };
        break;
      default:
        throw new Error("Unknown authorization type");
    }

    // Adjust the type and value structure to match the Amino representation of MsgGrant
    return {
      type: "authz/MsgGrant", // Update the type to the correct Amino type for MsgGrant
      value: {
        granter: this.data.granter,
        grantee: this.data.grantee,
        grant: {
          authorization: grant_auth,
          expiration: (this.data.grant?.expiration?.seconds) ? 
            new Date(Number(this.data.grant.expiration.seconds) * 1000).toISOString()
           : undefined,
        }
      },
    };
  }
}
