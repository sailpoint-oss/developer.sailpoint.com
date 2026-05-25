---
id: v2026-intel-identity-response
title: IntelIdentityResponse
pagination_label: IntelIdentityResponse
sidebar_label: IntelIdentityResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelIdentityResponse', 'V2026IntelIdentityResponse'] 
slug: /tools/sdk/go/v2026/models/intel-identity-response
tags: ['SDK', 'Software Development Kit', 'IntelIdentityResponse', 'V2026IntelIdentityResponse']
---

# IntelIdentityResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identity Security Cloud identifier for this identity. | 
**Type** | **string** | Discriminator indicating whether this identity is human or machine backed. | 
**DisplayName** | Pointer to **string** | Preferred display name for the identity across administrative experiences. | [optional] 
**Description** | Pointer to **NullableString** | Optional free-text description assigned to the identity profile when present. | [optional] 
**Subtype** | Pointer to **NullableString** | For HUMAN identities, NERM classification (Employee, Non Employee, or Cannot Determine). For MACHINE identities, connector subtype string from the authoritative source.  | [optional] 
**Owners** | Pointer to **NullableString** | Serialized owner reference information when populated by upstream identity services. | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Arbitrary SCIM-style attribute bag returned for the identity context view. | [optional] 
**Timestamps** | [**IntelIdentityTimestamps**](intel-identity-timestamps) | Created and modified timestamps for the identity record in Identity Security Cloud. | 
**Human** | Pointer to [**NullableIntelHuman**](intel-human) | Human identity extension payload when type is HUMAN. | [optional] 
**Machine** | Pointer to [**NullableIntelMachine**](intel-machine) | Machine identity extension payload when type is MACHINE. | [optional] 
**Links** | Pointer to [**NullableIntelIdentityLinks**](intel-identity-links) | Hyperlinks to related Intelligence Package sub-resources; present for HUMAN only. | [optional] 

## Methods

### NewIntelIdentityResponse

`func NewIntelIdentityResponse(id string, type_ string, timestamps IntelIdentityTimestamps, ) *IntelIdentityResponse`

NewIntelIdentityResponse instantiates a new IntelIdentityResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityResponseWithDefaults

`func NewIntelIdentityResponseWithDefaults() *IntelIdentityResponse`

NewIntelIdentityResponseWithDefaults instantiates a new IntelIdentityResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IntelIdentityResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IntelIdentityResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IntelIdentityResponse) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *IntelIdentityResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IntelIdentityResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IntelIdentityResponse) SetType(v string)`

SetType sets Type field to given value.


### GetDisplayName

`func (o *IntelIdentityResponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *IntelIdentityResponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *IntelIdentityResponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *IntelIdentityResponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *IntelIdentityResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *IntelIdentityResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *IntelIdentityResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *IntelIdentityResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *IntelIdentityResponse) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *IntelIdentityResponse) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSubtype

`func (o *IntelIdentityResponse) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *IntelIdentityResponse) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *IntelIdentityResponse) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.

### HasSubtype

`func (o *IntelIdentityResponse) HasSubtype() bool`

HasSubtype returns a boolean if a field has been set.

### SetSubtypeNil

`func (o *IntelIdentityResponse) SetSubtypeNil(b bool)`

 SetSubtypeNil sets the value for Subtype to be an explicit nil

### UnsetSubtype
`func (o *IntelIdentityResponse) UnsetSubtype()`

UnsetSubtype ensures that no value is present for Subtype, not even an explicit nil
### GetOwners

`func (o *IntelIdentityResponse) GetOwners() string`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *IntelIdentityResponse) GetOwnersOk() (*string, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *IntelIdentityResponse) SetOwners(v string)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *IntelIdentityResponse) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### SetOwnersNil

`func (o *IntelIdentityResponse) SetOwnersNil(b bool)`

 SetOwnersNil sets the value for Owners to be an explicit nil

### UnsetOwners
`func (o *IntelIdentityResponse) UnsetOwners()`

UnsetOwners ensures that no value is present for Owners, not even an explicit nil
### GetAttributes

`func (o *IntelIdentityResponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *IntelIdentityResponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *IntelIdentityResponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *IntelIdentityResponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetTimestamps

`func (o *IntelIdentityResponse) GetTimestamps() IntelIdentityTimestamps`

GetTimestamps returns the Timestamps field if non-nil, zero value otherwise.

### GetTimestampsOk

`func (o *IntelIdentityResponse) GetTimestampsOk() (*IntelIdentityTimestamps, bool)`

GetTimestampsOk returns a tuple with the Timestamps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamps

`func (o *IntelIdentityResponse) SetTimestamps(v IntelIdentityTimestamps)`

SetTimestamps sets Timestamps field to given value.


### GetHuman

`func (o *IntelIdentityResponse) GetHuman() IntelHuman`

GetHuman returns the Human field if non-nil, zero value otherwise.

### GetHumanOk

`func (o *IntelIdentityResponse) GetHumanOk() (*IntelHuman, bool)`

GetHumanOk returns a tuple with the Human field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHuman

`func (o *IntelIdentityResponse) SetHuman(v IntelHuman)`

SetHuman sets Human field to given value.

### HasHuman

`func (o *IntelIdentityResponse) HasHuman() bool`

HasHuman returns a boolean if a field has been set.

### SetHumanNil

`func (o *IntelIdentityResponse) SetHumanNil(b bool)`

 SetHumanNil sets the value for Human to be an explicit nil

### UnsetHuman
`func (o *IntelIdentityResponse) UnsetHuman()`

UnsetHuman ensures that no value is present for Human, not even an explicit nil
### GetMachine

`func (o *IntelIdentityResponse) GetMachine() IntelMachine`

GetMachine returns the Machine field if non-nil, zero value otherwise.

### GetMachineOk

`func (o *IntelIdentityResponse) GetMachineOk() (*IntelMachine, bool)`

GetMachineOk returns a tuple with the Machine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachine

`func (o *IntelIdentityResponse) SetMachine(v IntelMachine)`

SetMachine sets Machine field to given value.

### HasMachine

`func (o *IntelIdentityResponse) HasMachine() bool`

HasMachine returns a boolean if a field has been set.

### SetMachineNil

`func (o *IntelIdentityResponse) SetMachineNil(b bool)`

 SetMachineNil sets the value for Machine to be an explicit nil

### UnsetMachine
`func (o *IntelIdentityResponse) UnsetMachine()`

UnsetMachine ensures that no value is present for Machine, not even an explicit nil
### GetLinks

`func (o *IntelIdentityResponse) GetLinks() IntelIdentityLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *IntelIdentityResponse) GetLinksOk() (*IntelIdentityLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *IntelIdentityResponse) SetLinks(v IntelIdentityLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *IntelIdentityResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### SetLinksNil

`func (o *IntelIdentityResponse) SetLinksNil(b bool)`

 SetLinksNil sets the value for Links to be an explicit nil

### UnsetLinks
`func (o *IntelIdentityResponse) UnsetLinks()`

UnsetLinks ensures that no value is present for Links, not even an explicit nil

