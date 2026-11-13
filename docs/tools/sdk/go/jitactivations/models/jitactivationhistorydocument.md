# Jitactivationhistorydocument

# Jitactivationhistorydocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier of the activation record. | [optional] 
**TenantId** | Pointer to **string** | Tenant (pod/org) identifier. | [optional] 
**IdentityId** | Pointer to **string** | Identifier of the identity that requested activation. | [optional] 
**AccountId** | Pointer to **string** | Identifier of the account on which the entitlement was provisioned. | [optional] 
**EntitlementId** | Pointer to **string** | Identifier of the entitlement that was activated. | [optional] 
**SourceId** | Pointer to **string** | Identifier of the source that owns the entitlement. | [optional] 
**ConnectionId** | Pointer to **string** | Identifier of the entitlement connection used for this activation. | [optional] 
**IdentityName** | Pointer to **string** | Display name of the identity. | [optional] 
**EntitlementName** | Pointer to **string** | Display name of the entitlement. | [optional] 
**SourceDisplayName** | Pointer to **string** | Display name of the source. | [optional] 
**PolicyDisplayNames** | Pointer to **[]string** | Display names of the JIT policies that matched this activation. | [optional] 
**Status** | Pointer to **string** | Current or final status of the activation workflow. Possible values: ACTIVATING, AWAITING_FRICTIONS, PROVISIONING, PROVISIONED, DEPROVISIONING, COMPLETE, CANCELLED, ERROR, TIMED_OUT, REVOKED. | [optional] 
**Error** | Pointer to **NullableString** | Error message if the activation ended in an ERROR state. | [optional] 
**PolicyFrictionOutcome** | Pointer to **NullableString** | Outcome of policy friction evaluation (e.g. SUCCESS_ENFORCED, BYPASSED). | [optional] 
**PolicyMatchDetails** | Pointer to **[]string** | UUIDs of the policy records that matched this activation. | [optional] 
**ActivationInitiated** | Pointer to **NullableTime** | Timestamp when the activation was initiated. | [optional] 
**ProvisionStart** | Pointer to **NullableTime** | Timestamp when provisioning started. | [optional] 
**ProvisionCompleted** | Pointer to **NullableTime** | Timestamp when provisioning completed. | [optional] 
**DeprovisionStart** | Pointer to **NullableTime** | Timestamp when deprovisioning started. | [optional] 
**DeprovisionComplete** | Pointer to **NullableTime** | Timestamp when deprovisioning completed. | [optional] 
**ProvisionDurationMins** | Pointer to **NullableFloat32** | Duration of the provisioning phase in minutes. | [optional] 
**DeprovisionDurationMins** | Pointer to **NullableFloat32** | Duration of the deprovisioning phase in minutes. | [optional] 
**Summary** | Pointer to [**NullableJitactivationhistorydocumentSummary**](jitactivationhistorydocument-summary) |  | [optional] 
**Frictions** | Pointer to [**[]JitactivationhistorydocumentFrictionsInner**](jitactivationhistorydocument-frictions-inner) | Individual friction items presented to the user during activation (e.g. TICKET, JUSTIFICATION, REAUTH). Null when no friction was evaluated. | [optional] 
**ActivationDetails** | Pointer to **map[string]interface\{\}** | Additional structured metadata about the activation. Shape is subject to change. | [optional] 
**ActivationDuration** | Pointer to **map[string]interface\{\}** | Duration breakdown of the full activation lifecycle. Shape is subject to change. | [optional] 
**ProvisioningDetails** | Pointer to **map[string]interface\{\}** | Low-level provisioning operation detail. Shape is subject to change. | [optional] 

## Methods

### NewJitactivationhistorydocument

`func NewJitactivationhistorydocument() *Jitactivationhistorydocument`

NewJitactivationhistorydocument instantiates a new Jitactivationhistorydocument object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationhistorydocumentWithDefaults

`func NewJitactivationhistorydocumentWithDefaults() *Jitactivationhistorydocument`

NewJitactivationhistorydocumentWithDefaults instantiates a new Jitactivationhistorydocument object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Jitactivationhistorydocument) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Jitactivationhistorydocument) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Jitactivationhistorydocument) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Jitactivationhistorydocument) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTenantId

`func (o *Jitactivationhistorydocument) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *Jitactivationhistorydocument) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *Jitactivationhistorydocument) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *Jitactivationhistorydocument) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetIdentityId

`func (o *Jitactivationhistorydocument) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Jitactivationhistorydocument) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Jitactivationhistorydocument) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Jitactivationhistorydocument) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetAccountId

`func (o *Jitactivationhistorydocument) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *Jitactivationhistorydocument) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *Jitactivationhistorydocument) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *Jitactivationhistorydocument) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetEntitlementId

`func (o *Jitactivationhistorydocument) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *Jitactivationhistorydocument) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *Jitactivationhistorydocument) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.

### HasEntitlementId

`func (o *Jitactivationhistorydocument) HasEntitlementId() bool`

HasEntitlementId returns a boolean if a field has been set.

### GetSourceId

`func (o *Jitactivationhistorydocument) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Jitactivationhistorydocument) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Jitactivationhistorydocument) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Jitactivationhistorydocument) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetConnectionId

`func (o *Jitactivationhistorydocument) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *Jitactivationhistorydocument) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *Jitactivationhistorydocument) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.

### HasConnectionId

`func (o *Jitactivationhistorydocument) HasConnectionId() bool`

HasConnectionId returns a boolean if a field has been set.

### GetIdentityName

`func (o *Jitactivationhistorydocument) GetIdentityName() string`

GetIdentityName returns the IdentityName field if non-nil, zero value otherwise.

### GetIdentityNameOk

`func (o *Jitactivationhistorydocument) GetIdentityNameOk() (*string, bool)`

GetIdentityNameOk returns a tuple with the IdentityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityName

`func (o *Jitactivationhistorydocument) SetIdentityName(v string)`

SetIdentityName sets IdentityName field to given value.

### HasIdentityName

`func (o *Jitactivationhistorydocument) HasIdentityName() bool`

HasIdentityName returns a boolean if a field has been set.

### GetEntitlementName

`func (o *Jitactivationhistorydocument) GetEntitlementName() string`

GetEntitlementName returns the EntitlementName field if non-nil, zero value otherwise.

### GetEntitlementNameOk

`func (o *Jitactivationhistorydocument) GetEntitlementNameOk() (*string, bool)`

GetEntitlementNameOk returns a tuple with the EntitlementName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementName

`func (o *Jitactivationhistorydocument) SetEntitlementName(v string)`

SetEntitlementName sets EntitlementName field to given value.

### HasEntitlementName

`func (o *Jitactivationhistorydocument) HasEntitlementName() bool`

HasEntitlementName returns a boolean if a field has been set.

### GetSourceDisplayName

`func (o *Jitactivationhistorydocument) GetSourceDisplayName() string`

GetSourceDisplayName returns the SourceDisplayName field if non-nil, zero value otherwise.

### GetSourceDisplayNameOk

`func (o *Jitactivationhistorydocument) GetSourceDisplayNameOk() (*string, bool)`

GetSourceDisplayNameOk returns a tuple with the SourceDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDisplayName

`func (o *Jitactivationhistorydocument) SetSourceDisplayName(v string)`

SetSourceDisplayName sets SourceDisplayName field to given value.

### HasSourceDisplayName

`func (o *Jitactivationhistorydocument) HasSourceDisplayName() bool`

HasSourceDisplayName returns a boolean if a field has been set.

### GetPolicyDisplayNames

`func (o *Jitactivationhistorydocument) GetPolicyDisplayNames() []string`

GetPolicyDisplayNames returns the PolicyDisplayNames field if non-nil, zero value otherwise.

### GetPolicyDisplayNamesOk

`func (o *Jitactivationhistorydocument) GetPolicyDisplayNamesOk() (*[]string, bool)`

GetPolicyDisplayNamesOk returns a tuple with the PolicyDisplayNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyDisplayNames

`func (o *Jitactivationhistorydocument) SetPolicyDisplayNames(v []string)`

SetPolicyDisplayNames sets PolicyDisplayNames field to given value.

### HasPolicyDisplayNames

`func (o *Jitactivationhistorydocument) HasPolicyDisplayNames() bool`

HasPolicyDisplayNames returns a boolean if a field has been set.

### GetStatus

`func (o *Jitactivationhistorydocument) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Jitactivationhistorydocument) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Jitactivationhistorydocument) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Jitactivationhistorydocument) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetError

`func (o *Jitactivationhistorydocument) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *Jitactivationhistorydocument) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *Jitactivationhistorydocument) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *Jitactivationhistorydocument) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *Jitactivationhistorydocument) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *Jitactivationhistorydocument) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil
### GetPolicyFrictionOutcome

`func (o *Jitactivationhistorydocument) GetPolicyFrictionOutcome() string`

GetPolicyFrictionOutcome returns the PolicyFrictionOutcome field if non-nil, zero value otherwise.

### GetPolicyFrictionOutcomeOk

`func (o *Jitactivationhistorydocument) GetPolicyFrictionOutcomeOk() (*string, bool)`

GetPolicyFrictionOutcomeOk returns a tuple with the PolicyFrictionOutcome field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyFrictionOutcome

`func (o *Jitactivationhistorydocument) SetPolicyFrictionOutcome(v string)`

SetPolicyFrictionOutcome sets PolicyFrictionOutcome field to given value.

### HasPolicyFrictionOutcome

`func (o *Jitactivationhistorydocument) HasPolicyFrictionOutcome() bool`

HasPolicyFrictionOutcome returns a boolean if a field has been set.

### SetPolicyFrictionOutcomeNil

`func (o *Jitactivationhistorydocument) SetPolicyFrictionOutcomeNil(b bool)`

 SetPolicyFrictionOutcomeNil sets the value for PolicyFrictionOutcome to be an explicit nil

### UnsetPolicyFrictionOutcome
`func (o *Jitactivationhistorydocument) UnsetPolicyFrictionOutcome()`

UnsetPolicyFrictionOutcome ensures that no value is present for PolicyFrictionOutcome, not even an explicit nil
### GetPolicyMatchDetails

`func (o *Jitactivationhistorydocument) GetPolicyMatchDetails() []string`

GetPolicyMatchDetails returns the PolicyMatchDetails field if non-nil, zero value otherwise.

### GetPolicyMatchDetailsOk

`func (o *Jitactivationhistorydocument) GetPolicyMatchDetailsOk() (*[]string, bool)`

GetPolicyMatchDetailsOk returns a tuple with the PolicyMatchDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyMatchDetails

`func (o *Jitactivationhistorydocument) SetPolicyMatchDetails(v []string)`

SetPolicyMatchDetails sets PolicyMatchDetails field to given value.

### HasPolicyMatchDetails

`func (o *Jitactivationhistorydocument) HasPolicyMatchDetails() bool`

HasPolicyMatchDetails returns a boolean if a field has been set.

### SetPolicyMatchDetailsNil

`func (o *Jitactivationhistorydocument) SetPolicyMatchDetailsNil(b bool)`

 SetPolicyMatchDetailsNil sets the value for PolicyMatchDetails to be an explicit nil

### UnsetPolicyMatchDetails
`func (o *Jitactivationhistorydocument) UnsetPolicyMatchDetails()`

UnsetPolicyMatchDetails ensures that no value is present for PolicyMatchDetails, not even an explicit nil
### GetActivationInitiated

`func (o *Jitactivationhistorydocument) GetActivationInitiated() SailPointTime`

GetActivationInitiated returns the ActivationInitiated field if non-nil, zero value otherwise.

### GetActivationInitiatedOk

`func (o *Jitactivationhistorydocument) GetActivationInitiatedOk() (*SailPointTime, bool)`

GetActivationInitiatedOk returns a tuple with the ActivationInitiated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationInitiated

`func (o *Jitactivationhistorydocument) SetActivationInitiated(v SailPointTime)`

SetActivationInitiated sets ActivationInitiated field to given value.

### HasActivationInitiated

`func (o *Jitactivationhistorydocument) HasActivationInitiated() bool`

HasActivationInitiated returns a boolean if a field has been set.

### SetActivationInitiatedNil

`func (o *Jitactivationhistorydocument) SetActivationInitiatedNil(b bool)`

 SetActivationInitiatedNil sets the value for ActivationInitiated to be an explicit nil

### UnsetActivationInitiated
`func (o *Jitactivationhistorydocument) UnsetActivationInitiated()`

UnsetActivationInitiated ensures that no value is present for ActivationInitiated, not even an explicit nil
### GetProvisionStart

`func (o *Jitactivationhistorydocument) GetProvisionStart() SailPointTime`

GetProvisionStart returns the ProvisionStart field if non-nil, zero value otherwise.

### GetProvisionStartOk

`func (o *Jitactivationhistorydocument) GetProvisionStartOk() (*SailPointTime, bool)`

GetProvisionStartOk returns a tuple with the ProvisionStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionStart

`func (o *Jitactivationhistorydocument) SetProvisionStart(v SailPointTime)`

SetProvisionStart sets ProvisionStart field to given value.

### HasProvisionStart

`func (o *Jitactivationhistorydocument) HasProvisionStart() bool`

HasProvisionStart returns a boolean if a field has been set.

### SetProvisionStartNil

`func (o *Jitactivationhistorydocument) SetProvisionStartNil(b bool)`

 SetProvisionStartNil sets the value for ProvisionStart to be an explicit nil

### UnsetProvisionStart
`func (o *Jitactivationhistorydocument) UnsetProvisionStart()`

UnsetProvisionStart ensures that no value is present for ProvisionStart, not even an explicit nil
### GetProvisionCompleted

`func (o *Jitactivationhistorydocument) GetProvisionCompleted() SailPointTime`

GetProvisionCompleted returns the ProvisionCompleted field if non-nil, zero value otherwise.

### GetProvisionCompletedOk

`func (o *Jitactivationhistorydocument) GetProvisionCompletedOk() (*SailPointTime, bool)`

GetProvisionCompletedOk returns a tuple with the ProvisionCompleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionCompleted

`func (o *Jitactivationhistorydocument) SetProvisionCompleted(v SailPointTime)`

SetProvisionCompleted sets ProvisionCompleted field to given value.

### HasProvisionCompleted

`func (o *Jitactivationhistorydocument) HasProvisionCompleted() bool`

HasProvisionCompleted returns a boolean if a field has been set.

### SetProvisionCompletedNil

`func (o *Jitactivationhistorydocument) SetProvisionCompletedNil(b bool)`

 SetProvisionCompletedNil sets the value for ProvisionCompleted to be an explicit nil

### UnsetProvisionCompleted
`func (o *Jitactivationhistorydocument) UnsetProvisionCompleted()`

UnsetProvisionCompleted ensures that no value is present for ProvisionCompleted, not even an explicit nil
### GetDeprovisionStart

`func (o *Jitactivationhistorydocument) GetDeprovisionStart() SailPointTime`

GetDeprovisionStart returns the DeprovisionStart field if non-nil, zero value otherwise.

### GetDeprovisionStartOk

`func (o *Jitactivationhistorydocument) GetDeprovisionStartOk() (*SailPointTime, bool)`

GetDeprovisionStartOk returns a tuple with the DeprovisionStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprovisionStart

`func (o *Jitactivationhistorydocument) SetDeprovisionStart(v SailPointTime)`

SetDeprovisionStart sets DeprovisionStart field to given value.

### HasDeprovisionStart

`func (o *Jitactivationhistorydocument) HasDeprovisionStart() bool`

HasDeprovisionStart returns a boolean if a field has been set.

### SetDeprovisionStartNil

`func (o *Jitactivationhistorydocument) SetDeprovisionStartNil(b bool)`

 SetDeprovisionStartNil sets the value for DeprovisionStart to be an explicit nil

### UnsetDeprovisionStart
`func (o *Jitactivationhistorydocument) UnsetDeprovisionStart()`

UnsetDeprovisionStart ensures that no value is present for DeprovisionStart, not even an explicit nil
### GetDeprovisionComplete

`func (o *Jitactivationhistorydocument) GetDeprovisionComplete() SailPointTime`

GetDeprovisionComplete returns the DeprovisionComplete field if non-nil, zero value otherwise.

### GetDeprovisionCompleteOk

`func (o *Jitactivationhistorydocument) GetDeprovisionCompleteOk() (*SailPointTime, bool)`

GetDeprovisionCompleteOk returns a tuple with the DeprovisionComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprovisionComplete

`func (o *Jitactivationhistorydocument) SetDeprovisionComplete(v SailPointTime)`

SetDeprovisionComplete sets DeprovisionComplete field to given value.

### HasDeprovisionComplete

`func (o *Jitactivationhistorydocument) HasDeprovisionComplete() bool`

HasDeprovisionComplete returns a boolean if a field has been set.

### SetDeprovisionCompleteNil

`func (o *Jitactivationhistorydocument) SetDeprovisionCompleteNil(b bool)`

 SetDeprovisionCompleteNil sets the value for DeprovisionComplete to be an explicit nil

### UnsetDeprovisionComplete
`func (o *Jitactivationhistorydocument) UnsetDeprovisionComplete()`

UnsetDeprovisionComplete ensures that no value is present for DeprovisionComplete, not even an explicit nil
### GetProvisionDurationMins

`func (o *Jitactivationhistorydocument) GetProvisionDurationMins() float32`

GetProvisionDurationMins returns the ProvisionDurationMins field if non-nil, zero value otherwise.

### GetProvisionDurationMinsOk

`func (o *Jitactivationhistorydocument) GetProvisionDurationMinsOk() (*float32, bool)`

GetProvisionDurationMinsOk returns a tuple with the ProvisionDurationMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionDurationMins

`func (o *Jitactivationhistorydocument) SetProvisionDurationMins(v float32)`

SetProvisionDurationMins sets ProvisionDurationMins field to given value.

### HasProvisionDurationMins

`func (o *Jitactivationhistorydocument) HasProvisionDurationMins() bool`

HasProvisionDurationMins returns a boolean if a field has been set.

### SetProvisionDurationMinsNil

`func (o *Jitactivationhistorydocument) SetProvisionDurationMinsNil(b bool)`

 SetProvisionDurationMinsNil sets the value for ProvisionDurationMins to be an explicit nil

### UnsetProvisionDurationMins
`func (o *Jitactivationhistorydocument) UnsetProvisionDurationMins()`

UnsetProvisionDurationMins ensures that no value is present for ProvisionDurationMins, not even an explicit nil
### GetDeprovisionDurationMins

`func (o *Jitactivationhistorydocument) GetDeprovisionDurationMins() float32`

GetDeprovisionDurationMins returns the DeprovisionDurationMins field if non-nil, zero value otherwise.

### GetDeprovisionDurationMinsOk

`func (o *Jitactivationhistorydocument) GetDeprovisionDurationMinsOk() (*float32, bool)`

GetDeprovisionDurationMinsOk returns a tuple with the DeprovisionDurationMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprovisionDurationMins

`func (o *Jitactivationhistorydocument) SetDeprovisionDurationMins(v float32)`

SetDeprovisionDurationMins sets DeprovisionDurationMins field to given value.

### HasDeprovisionDurationMins

`func (o *Jitactivationhistorydocument) HasDeprovisionDurationMins() bool`

HasDeprovisionDurationMins returns a boolean if a field has been set.

### SetDeprovisionDurationMinsNil

`func (o *Jitactivationhistorydocument) SetDeprovisionDurationMinsNil(b bool)`

 SetDeprovisionDurationMinsNil sets the value for DeprovisionDurationMins to be an explicit nil

### UnsetDeprovisionDurationMins
`func (o *Jitactivationhistorydocument) UnsetDeprovisionDurationMins()`

UnsetDeprovisionDurationMins ensures that no value is present for DeprovisionDurationMins, not even an explicit nil
### GetSummary

`func (o *Jitactivationhistorydocument) GetSummary() JitactivationhistorydocumentSummary`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *Jitactivationhistorydocument) GetSummaryOk() (*JitactivationhistorydocumentSummary, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *Jitactivationhistorydocument) SetSummary(v JitactivationhistorydocumentSummary)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *Jitactivationhistorydocument) HasSummary() bool`

HasSummary returns a boolean if a field has been set.

### SetSummaryNil

`func (o *Jitactivationhistorydocument) SetSummaryNil(b bool)`

 SetSummaryNil sets the value for Summary to be an explicit nil

### UnsetSummary
`func (o *Jitactivationhistorydocument) UnsetSummary()`

UnsetSummary ensures that no value is present for Summary, not even an explicit nil
### GetFrictions

`func (o *Jitactivationhistorydocument) GetFrictions() []JitactivationhistorydocumentFrictionsInner`

GetFrictions returns the Frictions field if non-nil, zero value otherwise.

### GetFrictionsOk

`func (o *Jitactivationhistorydocument) GetFrictionsOk() (*[]JitactivationhistorydocumentFrictionsInner, bool)`

GetFrictionsOk returns a tuple with the Frictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrictions

`func (o *Jitactivationhistorydocument) SetFrictions(v []JitactivationhistorydocumentFrictionsInner)`

SetFrictions sets Frictions field to given value.

### HasFrictions

`func (o *Jitactivationhistorydocument) HasFrictions() bool`

HasFrictions returns a boolean if a field has been set.

### SetFrictionsNil

`func (o *Jitactivationhistorydocument) SetFrictionsNil(b bool)`

 SetFrictionsNil sets the value for Frictions to be an explicit nil

### UnsetFrictions
`func (o *Jitactivationhistorydocument) UnsetFrictions()`

UnsetFrictions ensures that no value is present for Frictions, not even an explicit nil
### GetActivationDetails

`func (o *Jitactivationhistorydocument) GetActivationDetails() map[string]interface{}`

GetActivationDetails returns the ActivationDetails field if non-nil, zero value otherwise.

### GetActivationDetailsOk

`func (o *Jitactivationhistorydocument) GetActivationDetailsOk() (*map[string]interface{}, bool)`

GetActivationDetailsOk returns a tuple with the ActivationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationDetails

`func (o *Jitactivationhistorydocument) SetActivationDetails(v map[string]interface{})`

SetActivationDetails sets ActivationDetails field to given value.

### HasActivationDetails

`func (o *Jitactivationhistorydocument) HasActivationDetails() bool`

HasActivationDetails returns a boolean if a field has been set.

### SetActivationDetailsNil

`func (o *Jitactivationhistorydocument) SetActivationDetailsNil(b bool)`

 SetActivationDetailsNil sets the value for ActivationDetails to be an explicit nil

### UnsetActivationDetails
`func (o *Jitactivationhistorydocument) UnsetActivationDetails()`

UnsetActivationDetails ensures that no value is present for ActivationDetails, not even an explicit nil
### GetActivationDuration

`func (o *Jitactivationhistorydocument) GetActivationDuration() map[string]interface{}`

GetActivationDuration returns the ActivationDuration field if non-nil, zero value otherwise.

### GetActivationDurationOk

`func (o *Jitactivationhistorydocument) GetActivationDurationOk() (*map[string]interface{}, bool)`

GetActivationDurationOk returns a tuple with the ActivationDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationDuration

`func (o *Jitactivationhistorydocument) SetActivationDuration(v map[string]interface{})`

SetActivationDuration sets ActivationDuration field to given value.

### HasActivationDuration

`func (o *Jitactivationhistorydocument) HasActivationDuration() bool`

HasActivationDuration returns a boolean if a field has been set.

### SetActivationDurationNil

`func (o *Jitactivationhistorydocument) SetActivationDurationNil(b bool)`

 SetActivationDurationNil sets the value for ActivationDuration to be an explicit nil

### UnsetActivationDuration
`func (o *Jitactivationhistorydocument) UnsetActivationDuration()`

UnsetActivationDuration ensures that no value is present for ActivationDuration, not even an explicit nil
### GetProvisioningDetails

`func (o *Jitactivationhistorydocument) GetProvisioningDetails() map[string]interface{}`

GetProvisioningDetails returns the ProvisioningDetails field if non-nil, zero value otherwise.

### GetProvisioningDetailsOk

`func (o *Jitactivationhistorydocument) GetProvisioningDetailsOk() (*map[string]interface{}, bool)`

GetProvisioningDetailsOk returns a tuple with the ProvisioningDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningDetails

`func (o *Jitactivationhistorydocument) SetProvisioningDetails(v map[string]interface{})`

SetProvisioningDetails sets ProvisioningDetails field to given value.

### HasProvisioningDetails

`func (o *Jitactivationhistorydocument) HasProvisioningDetails() bool`

HasProvisioningDetails returns a boolean if a field has been set.

### SetProvisioningDetailsNil

`func (o *Jitactivationhistorydocument) SetProvisioningDetailsNil(b bool)`

 SetProvisioningDetailsNil sets the value for ProvisioningDetails to be an explicit nil

### UnsetProvisioningDetails
`func (o *Jitactivationhistorydocument) UnsetProvisioningDetails()`

UnsetProvisioningDetails ensures that no value is present for ProvisioningDetails, not even an explicit nil

