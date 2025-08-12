---
id: v2025-access-item-entitlement-response
title: AccessItemEntitlementResponse
pagination_label: AccessItemEntitlementResponse
sidebar_label: AccessItemEntitlementResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemEntitlementResponse', 'V2025AccessItemEntitlementResponse'] 
slug: /tools/sdk/go/v2025/models/access-item-entitlement-response
tags: ['SDK', 'Software Development Kit', 'AccessItemEntitlementResponse', 'V2025AccessItemEntitlementResponse']
---

# AccessItemEntitlementResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the access item id | [optional] 
**AccessType** | Pointer to **string** | the access item type. entitlement in this case | [optional] 
**DisplayName** | Pointer to **string** | the display name of the identity | [optional] 
**SourceName** | Pointer to **string** | the name of the source | [optional] 
**Attribute** | **string** | the entitlement attribute | 
**Value** | **string** | the associated value | 
**Type** | **string** | the type of entitlement | 
**Description** | Pointer to **NullableString** | the description for the entitlment | [optional] 
**SourceId** | Pointer to **string** | the id of the source | [optional] 
**Standalone** | **NullableBool** | indicates whether the entitlement is standalone | 
**Privileged** | **NullableBool** | indicates whether the entitlement is privileged | 
**CloudGoverned** | **NullableBool** | indicates whether the entitlement is cloud governed | 

## Methods

### NewAccessItemEntitlementResponse

`func NewAccessItemEntitlementResponse(attribute string, value string, type_ string, standalone NullableBool, privileged NullableBool, cloudGoverned NullableBool, ) *AccessItemEntitlementResponse`

NewAccessItemEntitlementResponse instantiates a new AccessItemEntitlementResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemEntitlementResponseWithDefaults

`func NewAccessItemEntitlementResponseWithDefaults() *AccessItemEntitlementResponse`

NewAccessItemEntitlementResponseWithDefaults instantiates a new AccessItemEntitlementResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessItemEntitlementResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemEntitlementResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemEntitlementResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemEntitlementResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccessType

`func (o *AccessItemEntitlementResponse) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *AccessItemEntitlementResponse) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *AccessItemEntitlementResponse) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *AccessItemEntitlementResponse) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessItemEntitlementResponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessItemEntitlementResponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessItemEntitlementResponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessItemEntitlementResponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *AccessItemEntitlementResponse) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessItemEntitlementResponse) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessItemEntitlementResponse) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessItemEntitlementResponse) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetAttribute

`func (o *AccessItemEntitlementResponse) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *AccessItemEntitlementResponse) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *AccessItemEntitlementResponse) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValue

`func (o *AccessItemEntitlementResponse) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AccessItemEntitlementResponse) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AccessItemEntitlementResponse) SetValue(v string)`

SetValue sets Value field to given value.


### GetType

`func (o *AccessItemEntitlementResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessItemEntitlementResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessItemEntitlementResponse) SetType(v string)`

SetType sets Type field to given value.


### GetDescription

`func (o *AccessItemEntitlementResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessItemEntitlementResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessItemEntitlementResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessItemEntitlementResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessItemEntitlementResponse) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessItemEntitlementResponse) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSourceId

`func (o *AccessItemEntitlementResponse) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccessItemEntitlementResponse) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccessItemEntitlementResponse) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccessItemEntitlementResponse) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetStandalone

`func (o *AccessItemEntitlementResponse) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *AccessItemEntitlementResponse) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *AccessItemEntitlementResponse) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.


### SetStandaloneNil

`func (o *AccessItemEntitlementResponse) SetStandaloneNil(b bool)`

 SetStandaloneNil sets the value for Standalone to be an explicit nil

### UnsetStandalone
`func (o *AccessItemEntitlementResponse) UnsetStandalone()`

UnsetStandalone ensures that no value is present for Standalone, not even an explicit nil
### GetPrivileged

`func (o *AccessItemEntitlementResponse) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *AccessItemEntitlementResponse) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *AccessItemEntitlementResponse) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.


### SetPrivilegedNil

`func (o *AccessItemEntitlementResponse) SetPrivilegedNil(b bool)`

 SetPrivilegedNil sets the value for Privileged to be an explicit nil

### UnsetPrivileged
`func (o *AccessItemEntitlementResponse) UnsetPrivileged()`

UnsetPrivileged ensures that no value is present for Privileged, not even an explicit nil
### GetCloudGoverned

`func (o *AccessItemEntitlementResponse) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *AccessItemEntitlementResponse) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *AccessItemEntitlementResponse) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.


### SetCloudGovernedNil

`func (o *AccessItemEntitlementResponse) SetCloudGovernedNil(b bool)`

 SetCloudGovernedNil sets the value for CloudGoverned to be an explicit nil

### UnsetCloudGoverned
`func (o *AccessItemEntitlementResponse) UnsetCloudGoverned()`

UnsetCloudGoverned ensures that no value is present for CloudGoverned, not even an explicit nil

