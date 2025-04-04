---
id: v2024-access-item-entitlement-response
title: AccessItemEntitlementResponse
pagination_label: AccessItemEntitlementResponse
sidebar_label: AccessItemEntitlementResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemEntitlementResponse', 'V2024AccessItemEntitlementResponse'] 
slug: /tools/sdk/go/v2024/models/access-item-entitlement-response
tags: ['SDK', 'Software Development Kit', 'AccessItemEntitlementResponse', 'V2024AccessItemEntitlementResponse']
---

# AccessItemEntitlementResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** | Pointer to **string** | the access item type. entitlement in this case | [optional] 
**Id** | Pointer to **string** | the access item id | [optional] 
**Attribute** | Pointer to **string** | the entitlement attribute | [optional] 
**Value** | Pointer to **string** | the associated value | [optional] 
**EntitlementType** | Pointer to **string** | the type of entitlement | [optional] 
**SourceName** | Pointer to **string** | the name of the source | [optional] 
**SourceId** | Pointer to **string** | the id of the source | [optional] 
**Description** | Pointer to **string** | the description for the entitlment | [optional] 
**DisplayName** | Pointer to **string** | the display name of the identity | [optional] 
**Standalone** | **bool** | indicates whether the entitlement is standalone | 
**Privileged** | **bool** | indicates whether the entitlement is privileged | 
**CloudGoverned** | **bool** | indicates whether the entitlement is cloud governed | 

## Methods

### NewAccessItemEntitlementResponse

`func NewAccessItemEntitlementResponse(standalone bool, privileged bool, cloudGoverned bool, ) *AccessItemEntitlementResponse`

NewAccessItemEntitlementResponse instantiates a new AccessItemEntitlementResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemEntitlementResponseWithDefaults

`func NewAccessItemEntitlementResponseWithDefaults() *AccessItemEntitlementResponse`

NewAccessItemEntitlementResponseWithDefaults instantiates a new AccessItemEntitlementResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

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

### HasAttribute

`func (o *AccessItemEntitlementResponse) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

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

### HasValue

`func (o *AccessItemEntitlementResponse) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetEntitlementType

`func (o *AccessItemEntitlementResponse) GetEntitlementType() string`

GetEntitlementType returns the EntitlementType field if non-nil, zero value otherwise.

### GetEntitlementTypeOk

`func (o *AccessItemEntitlementResponse) GetEntitlementTypeOk() (*string, bool)`

GetEntitlementTypeOk returns a tuple with the EntitlementType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementType

`func (o *AccessItemEntitlementResponse) SetEntitlementType(v string)`

SetEntitlementType sets EntitlementType field to given value.

### HasEntitlementType

`func (o *AccessItemEntitlementResponse) HasEntitlementType() bool`

HasEntitlementType returns a boolean if a field has been set.

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



