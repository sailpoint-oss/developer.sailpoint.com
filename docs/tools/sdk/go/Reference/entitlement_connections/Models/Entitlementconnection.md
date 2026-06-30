---
id: v1-entitlementconnection
title: Entitlementconnection
pagination_label: Entitlementconnection
sidebar_label: Entitlementconnection
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementconnection', 'V1Entitlementconnection'] 
slug: /tools/sdk/go/entitlementconnections/models/entitlementconnection
tags: ['SDK', 'Software Development Kit', 'Entitlementconnection', 'V1Entitlementconnection']
---

# Entitlementconnection

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

### NewEntitlementconnection

`func NewEntitlementconnection() *Entitlementconnection`

NewEntitlementconnection instantiates a new Entitlementconnection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementconnectionWithDefaults

`func NewEntitlementconnectionWithDefaults() *Entitlementconnection`

NewEntitlementconnectionWithDefaults instantiates a new Entitlementconnection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTenantId

`func (o *Entitlementconnection) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *Entitlementconnection) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *Entitlementconnection) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *Entitlementconnection) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetConnectionId

`func (o *Entitlementconnection) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *Entitlementconnection) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *Entitlementconnection) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.

### HasConnectionId

`func (o *Entitlementconnection) HasConnectionId() bool`

HasConnectionId returns a boolean if a field has been set.

### GetIdentityId

`func (o *Entitlementconnection) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Entitlementconnection) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Entitlementconnection) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Entitlementconnection) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetMachineIdentityId

`func (o *Entitlementconnection) GetMachineIdentityId() string`

GetMachineIdentityId returns the MachineIdentityId field if non-nil, zero value otherwise.

### GetMachineIdentityIdOk

`func (o *Entitlementconnection) GetMachineIdentityIdOk() (*string, bool)`

GetMachineIdentityIdOk returns a tuple with the MachineIdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityId

`func (o *Entitlementconnection) SetMachineIdentityId(v string)`

SetMachineIdentityId sets MachineIdentityId field to given value.

### HasMachineIdentityId

`func (o *Entitlementconnection) HasMachineIdentityId() bool`

HasMachineIdentityId returns a boolean if a field has been set.

### GetAccountId

`func (o *Entitlementconnection) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *Entitlementconnection) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *Entitlementconnection) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *Entitlementconnection) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetEntitlementId

`func (o *Entitlementconnection) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *Entitlementconnection) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *Entitlementconnection) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.

### HasEntitlementId

`func (o *Entitlementconnection) HasEntitlementId() bool`

HasEntitlementId returns a boolean if a field has been set.

### GetSourceId

`func (o *Entitlementconnection) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Entitlementconnection) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Entitlementconnection) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Entitlementconnection) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetStandalone

`func (o *Entitlementconnection) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *Entitlementconnection) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *Entitlementconnection) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.

### HasStandalone

`func (o *Entitlementconnection) HasStandalone() bool`

HasStandalone returns a boolean if a field has been set.

### GetAttributeName

`func (o *Entitlementconnection) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *Entitlementconnection) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *Entitlementconnection) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *Entitlementconnection) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAttributeValue

`func (o *Entitlementconnection) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *Entitlementconnection) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *Entitlementconnection) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *Entitlementconnection) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### GetType

`func (o *Entitlementconnection) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Entitlementconnection) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Entitlementconnection) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Entitlementconnection) HasType() bool`

HasType returns a boolean if a field has been set.

### GetState

`func (o *Entitlementconnection) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Entitlementconnection) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Entitlementconnection) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *Entitlementconnection) HasState() bool`

HasState returns a boolean if a field has been set.

### GetStateChanged

`func (o *Entitlementconnection) GetStateChanged() SailPointTime`

GetStateChanged returns the StateChanged field if non-nil, zero value otherwise.

### GetStateChangedOk

`func (o *Entitlementconnection) GetStateChangedOk() (*SailPointTime, bool)`

GetStateChangedOk returns a tuple with the StateChanged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateChanged

`func (o *Entitlementconnection) SetStateChanged(v SailPointTime)`

SetStateChanged sets StateChanged field to given value.

### HasStateChanged

`func (o *Entitlementconnection) HasStateChanged() bool`

HasStateChanged returns a boolean if a field has been set.

### GetStateChangedBy

`func (o *Entitlementconnection) GetStateChangedBy() string`

GetStateChangedBy returns the StateChangedBy field if non-nil, zero value otherwise.

### GetStateChangedByOk

`func (o *Entitlementconnection) GetStateChangedByOk() (*string, bool)`

GetStateChangedByOk returns a tuple with the StateChangedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateChangedBy

`func (o *Entitlementconnection) SetStateChangedBy(v string)`

SetStateChangedBy sets StateChangedBy field to given value.

### HasStateChangedBy

`func (o *Entitlementconnection) HasStateChangedBy() bool`

HasStateChangedBy returns a boolean if a field has been set.

### GetJitActivation

`func (o *Entitlementconnection) GetJitActivation() SailPointTime`

GetJitActivation returns the JitActivation field if non-nil, zero value otherwise.

### GetJitActivationOk

`func (o *Entitlementconnection) GetJitActivationOk() (*SailPointTime, bool)`

GetJitActivationOk returns a tuple with the JitActivation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitActivation

`func (o *Entitlementconnection) SetJitActivation(v SailPointTime)`

SetJitActivation sets JitActivation field to given value.

### HasJitActivation

`func (o *Entitlementconnection) HasJitActivation() bool`

HasJitActivation returns a boolean if a field has been set.

### GetJitProvision

`func (o *Entitlementconnection) GetJitProvision() SailPointTime`

GetJitProvision returns the JitProvision field if non-nil, zero value otherwise.

### GetJitProvisionOk

`func (o *Entitlementconnection) GetJitProvisionOk() (*SailPointTime, bool)`

GetJitProvisionOk returns a tuple with the JitProvision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitProvision

`func (o *Entitlementconnection) SetJitProvision(v SailPointTime)`

SetJitProvision sets JitProvision field to given value.

### HasJitProvision

`func (o *Entitlementconnection) HasJitProvision() bool`

HasJitProvision returns a boolean if a field has been set.

### GetJitDeactivation

`func (o *Entitlementconnection) GetJitDeactivation() SailPointTime`

GetJitDeactivation returns the JitDeactivation field if non-nil, zero value otherwise.

### GetJitDeactivationOk

`func (o *Entitlementconnection) GetJitDeactivationOk() (*SailPointTime, bool)`

GetJitDeactivationOk returns a tuple with the JitDeactivation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitDeactivation

`func (o *Entitlementconnection) SetJitDeactivation(v SailPointTime)`

SetJitDeactivation sets JitDeactivation field to given value.

### HasJitDeactivation

`func (o *Entitlementconnection) HasJitDeactivation() bool`

HasJitDeactivation returns a boolean if a field has been set.

### GetJitDeprovision

`func (o *Entitlementconnection) GetJitDeprovision() SailPointTime`

GetJitDeprovision returns the JitDeprovision field if non-nil, zero value otherwise.

### GetJitDeprovisionOk

`func (o *Entitlementconnection) GetJitDeprovisionOk() (*SailPointTime, bool)`

GetJitDeprovisionOk returns a tuple with the JitDeprovision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitDeprovision

`func (o *Entitlementconnection) SetJitDeprovision(v SailPointTime)`

SetJitDeprovision sets JitDeprovision field to given value.

### HasJitDeprovision

`func (o *Entitlementconnection) HasJitDeprovision() bool`

HasJitDeprovision returns a boolean if a field has been set.

### GetJitExpiration

`func (o *Entitlementconnection) GetJitExpiration() SailPointTime`

GetJitExpiration returns the JitExpiration field if non-nil, zero value otherwise.

### GetJitExpirationOk

`func (o *Entitlementconnection) GetJitExpirationOk() (*SailPointTime, bool)`

GetJitExpirationOk returns a tuple with the JitExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitExpiration

`func (o *Entitlementconnection) SetJitExpiration(v SailPointTime)`

SetJitExpiration sets JitExpiration field to given value.

### HasJitExpiration

`func (o *Entitlementconnection) HasJitExpiration() bool`

HasJitExpiration returns a boolean if a field has been set.

### GetDeleteAfter

`func (o *Entitlementconnection) GetDeleteAfter() SailPointTime`

GetDeleteAfter returns the DeleteAfter field if non-nil, zero value otherwise.

### GetDeleteAfterOk

`func (o *Entitlementconnection) GetDeleteAfterOk() (*SailPointTime, bool)`

GetDeleteAfterOk returns a tuple with the DeleteAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteAfter

`func (o *Entitlementconnection) SetDeleteAfter(v SailPointTime)`

SetDeleteAfter sets DeleteAfter field to given value.

### HasDeleteAfter

`func (o *Entitlementconnection) HasDeleteAfter() bool`

HasDeleteAfter returns a boolean if a field has been set.

### GetCreated

`func (o *Entitlementconnection) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Entitlementconnection) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Entitlementconnection) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Entitlementconnection) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Entitlementconnection) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Entitlementconnection) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Entitlementconnection) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Entitlementconnection) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetActorName

`func (o *Entitlementconnection) GetActorName() string`

GetActorName returns the ActorName field if non-nil, zero value otherwise.

### GetActorNameOk

`func (o *Entitlementconnection) GetActorNameOk() (*string, bool)`

GetActorNameOk returns a tuple with the ActorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActorName

`func (o *Entitlementconnection) SetActorName(v string)`

SetActorName sets ActorName field to given value.

### HasActorName

`func (o *Entitlementconnection) HasActorName() bool`

HasActorName returns a boolean if a field has been set.


