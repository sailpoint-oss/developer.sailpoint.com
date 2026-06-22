---
id: v2026-entitlement-connection
title: EntitlementConnection
pagination_label: EntitlementConnection
sidebar_label: EntitlementConnection
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementConnection', 'V2026EntitlementConnection'] 
slug: /tools/sdk/go/v2026/models/entitlement-connection
tags: ['SDK', 'Software Development Kit', 'EntitlementConnection', 'V2026EntitlementConnection']
---

# EntitlementConnection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TenantId** | Pointer to **string** | Tenant identifier that owns the connection. | [optional] 
**ConnectionId** | Pointer to **string** | Entitlement connection identifier. | [optional] 
**IdentityId** | Pointer to **string** | Identity identifier associated with the connection. | [optional] 
**MachineIdentityId** | Pointer to **string** | Machine identity identifier when the connection is machine-backed. | [optional] 
**AccountId** | Pointer to **string** | Account identifier for the connected source account. | [optional] 
**EntitlementId** | Pointer to **string** | Entitlement identifier on the source. | [optional] 
**SourceId** | Pointer to **string** | Source identifier that provides the account and entitlement. | [optional] 
**Standalone** | Pointer to **bool** | Indicates whether the connection is marked as standalone. | [optional] [default to false]
**AttributeName** | Pointer to **string** | Entitlement attribute name on the source. | [optional] 
**AttributeValue** | Pointer to **string** | Entitlement attribute value on the source. | [optional] 
**Type** | Pointer to **string** | Connection type classification. | [optional] 
**State** | Pointer to **string** | Current lifecycle state of the connection. | [optional] 
**StateChanged** | Pointer to **SailPointTime** | Time the connection state was last updated. | [optional] 
**StateChangedBy** | Pointer to **string** | Identifier of the actor that last changed state. | [optional] 
**JitActivation** | Pointer to **SailPointTime** | Time JIT activation occurred. | [optional] 
**JitProvision** | Pointer to **SailPointTime** | Time provisioning completed for JIT activation. | [optional] 
**JitDeactivation** | Pointer to **SailPointTime** | Time JIT deactivation occurred. | [optional] 
**JitDeprovision** | Pointer to **SailPointTime** | Time deprovisioning completed after JIT deactivation. | [optional] 
**JitExpiration** | Pointer to **SailPointTime** | Time when JIT access expires. | [optional] 
**DeleteAfter** | Pointer to **SailPointTime** | Time after which the connection is eligible for deletion. | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the connection was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | Time when the connection was last modified. | [optional] 
**ActorName** | Pointer to **string** | Display value for the actor associated with the latest change. | [optional] 

## Methods

### NewEntitlementConnection

`func NewEntitlementConnection() *EntitlementConnection`

NewEntitlementConnection instantiates a new EntitlementConnection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementConnectionWithDefaults

`func NewEntitlementConnectionWithDefaults() *EntitlementConnection`

NewEntitlementConnectionWithDefaults instantiates a new EntitlementConnection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTenantId

`func (o *EntitlementConnection) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *EntitlementConnection) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *EntitlementConnection) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *EntitlementConnection) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetConnectionId

`func (o *EntitlementConnection) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *EntitlementConnection) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *EntitlementConnection) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.

### HasConnectionId

`func (o *EntitlementConnection) HasConnectionId() bool`

HasConnectionId returns a boolean if a field has been set.

### GetIdentityId

`func (o *EntitlementConnection) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *EntitlementConnection) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *EntitlementConnection) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *EntitlementConnection) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetMachineIdentityId

`func (o *EntitlementConnection) GetMachineIdentityId() string`

GetMachineIdentityId returns the MachineIdentityId field if non-nil, zero value otherwise.

### GetMachineIdentityIdOk

`func (o *EntitlementConnection) GetMachineIdentityIdOk() (*string, bool)`

GetMachineIdentityIdOk returns a tuple with the MachineIdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityId

`func (o *EntitlementConnection) SetMachineIdentityId(v string)`

SetMachineIdentityId sets MachineIdentityId field to given value.

### HasMachineIdentityId

`func (o *EntitlementConnection) HasMachineIdentityId() bool`

HasMachineIdentityId returns a boolean if a field has been set.

### GetAccountId

`func (o *EntitlementConnection) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *EntitlementConnection) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *EntitlementConnection) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *EntitlementConnection) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetEntitlementId

`func (o *EntitlementConnection) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *EntitlementConnection) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *EntitlementConnection) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.

### HasEntitlementId

`func (o *EntitlementConnection) HasEntitlementId() bool`

HasEntitlementId returns a boolean if a field has been set.

### GetSourceId

`func (o *EntitlementConnection) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *EntitlementConnection) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *EntitlementConnection) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *EntitlementConnection) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetStandalone

`func (o *EntitlementConnection) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *EntitlementConnection) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *EntitlementConnection) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.

### HasStandalone

`func (o *EntitlementConnection) HasStandalone() bool`

HasStandalone returns a boolean if a field has been set.

### GetAttributeName

`func (o *EntitlementConnection) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *EntitlementConnection) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *EntitlementConnection) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *EntitlementConnection) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAttributeValue

`func (o *EntitlementConnection) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *EntitlementConnection) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *EntitlementConnection) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *EntitlementConnection) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### GetType

`func (o *EntitlementConnection) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementConnection) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementConnection) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntitlementConnection) HasType() bool`

HasType returns a boolean if a field has been set.

### GetState

`func (o *EntitlementConnection) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *EntitlementConnection) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *EntitlementConnection) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *EntitlementConnection) HasState() bool`

HasState returns a boolean if a field has been set.

### GetStateChanged

`func (o *EntitlementConnection) GetStateChanged() SailPointTime`

GetStateChanged returns the StateChanged field if non-nil, zero value otherwise.

### GetStateChangedOk

`func (o *EntitlementConnection) GetStateChangedOk() (*SailPointTime, bool)`

GetStateChangedOk returns a tuple with the StateChanged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateChanged

`func (o *EntitlementConnection) SetStateChanged(v SailPointTime)`

SetStateChanged sets StateChanged field to given value.

### HasStateChanged

`func (o *EntitlementConnection) HasStateChanged() bool`

HasStateChanged returns a boolean if a field has been set.

### GetStateChangedBy

`func (o *EntitlementConnection) GetStateChangedBy() string`

GetStateChangedBy returns the StateChangedBy field if non-nil, zero value otherwise.

### GetStateChangedByOk

`func (o *EntitlementConnection) GetStateChangedByOk() (*string, bool)`

GetStateChangedByOk returns a tuple with the StateChangedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateChangedBy

`func (o *EntitlementConnection) SetStateChangedBy(v string)`

SetStateChangedBy sets StateChangedBy field to given value.

### HasStateChangedBy

`func (o *EntitlementConnection) HasStateChangedBy() bool`

HasStateChangedBy returns a boolean if a field has been set.

### GetJitActivation

`func (o *EntitlementConnection) GetJitActivation() SailPointTime`

GetJitActivation returns the JitActivation field if non-nil, zero value otherwise.

### GetJitActivationOk

`func (o *EntitlementConnection) GetJitActivationOk() (*SailPointTime, bool)`

GetJitActivationOk returns a tuple with the JitActivation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitActivation

`func (o *EntitlementConnection) SetJitActivation(v SailPointTime)`

SetJitActivation sets JitActivation field to given value.

### HasJitActivation

`func (o *EntitlementConnection) HasJitActivation() bool`

HasJitActivation returns a boolean if a field has been set.

### GetJitProvision

`func (o *EntitlementConnection) GetJitProvision() SailPointTime`

GetJitProvision returns the JitProvision field if non-nil, zero value otherwise.

### GetJitProvisionOk

`func (o *EntitlementConnection) GetJitProvisionOk() (*SailPointTime, bool)`

GetJitProvisionOk returns a tuple with the JitProvision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitProvision

`func (o *EntitlementConnection) SetJitProvision(v SailPointTime)`

SetJitProvision sets JitProvision field to given value.

### HasJitProvision

`func (o *EntitlementConnection) HasJitProvision() bool`

HasJitProvision returns a boolean if a field has been set.

### GetJitDeactivation

`func (o *EntitlementConnection) GetJitDeactivation() SailPointTime`

GetJitDeactivation returns the JitDeactivation field if non-nil, zero value otherwise.

### GetJitDeactivationOk

`func (o *EntitlementConnection) GetJitDeactivationOk() (*SailPointTime, bool)`

GetJitDeactivationOk returns a tuple with the JitDeactivation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitDeactivation

`func (o *EntitlementConnection) SetJitDeactivation(v SailPointTime)`

SetJitDeactivation sets JitDeactivation field to given value.

### HasJitDeactivation

`func (o *EntitlementConnection) HasJitDeactivation() bool`

HasJitDeactivation returns a boolean if a field has been set.

### GetJitDeprovision

`func (o *EntitlementConnection) GetJitDeprovision() SailPointTime`

GetJitDeprovision returns the JitDeprovision field if non-nil, zero value otherwise.

### GetJitDeprovisionOk

`func (o *EntitlementConnection) GetJitDeprovisionOk() (*SailPointTime, bool)`

GetJitDeprovisionOk returns a tuple with the JitDeprovision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitDeprovision

`func (o *EntitlementConnection) SetJitDeprovision(v SailPointTime)`

SetJitDeprovision sets JitDeprovision field to given value.

### HasJitDeprovision

`func (o *EntitlementConnection) HasJitDeprovision() bool`

HasJitDeprovision returns a boolean if a field has been set.

### GetJitExpiration

`func (o *EntitlementConnection) GetJitExpiration() SailPointTime`

GetJitExpiration returns the JitExpiration field if non-nil, zero value otherwise.

### GetJitExpirationOk

`func (o *EntitlementConnection) GetJitExpirationOk() (*SailPointTime, bool)`

GetJitExpirationOk returns a tuple with the JitExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitExpiration

`func (o *EntitlementConnection) SetJitExpiration(v SailPointTime)`

SetJitExpiration sets JitExpiration field to given value.

### HasJitExpiration

`func (o *EntitlementConnection) HasJitExpiration() bool`

HasJitExpiration returns a boolean if a field has been set.

### GetDeleteAfter

`func (o *EntitlementConnection) GetDeleteAfter() SailPointTime`

GetDeleteAfter returns the DeleteAfter field if non-nil, zero value otherwise.

### GetDeleteAfterOk

`func (o *EntitlementConnection) GetDeleteAfterOk() (*SailPointTime, bool)`

GetDeleteAfterOk returns a tuple with the DeleteAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteAfter

`func (o *EntitlementConnection) SetDeleteAfter(v SailPointTime)`

SetDeleteAfter sets DeleteAfter field to given value.

### HasDeleteAfter

`func (o *EntitlementConnection) HasDeleteAfter() bool`

HasDeleteAfter returns a boolean if a field has been set.

### GetCreated

`func (o *EntitlementConnection) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *EntitlementConnection) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *EntitlementConnection) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *EntitlementConnection) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *EntitlementConnection) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *EntitlementConnection) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *EntitlementConnection) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *EntitlementConnection) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetActorName

`func (o *EntitlementConnection) GetActorName() string`

GetActorName returns the ActorName field if non-nil, zero value otherwise.

### GetActorNameOk

`func (o *EntitlementConnection) GetActorNameOk() (*string, bool)`

GetActorNameOk returns a tuple with the ActorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActorName

`func (o *EntitlementConnection) SetActorName(v string)`

SetActorName sets ActorName field to given value.

### HasActorName

`func (o *EntitlementConnection) HasActorName() bool`

HasActorName returns a boolean if a field has been set.


