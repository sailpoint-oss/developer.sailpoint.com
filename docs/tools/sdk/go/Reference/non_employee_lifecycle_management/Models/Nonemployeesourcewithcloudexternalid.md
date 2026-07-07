---
id: v1-nonemployeesourcewithcloudexternalid
title: Nonemployeesourcewithcloudexternalid
pagination_label: Nonemployeesourcewithcloudexternalid
sidebar_label: Nonemployeesourcewithcloudexternalid
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeesourcewithcloudexternalid', 'V1Nonemployeesourcewithcloudexternalid'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeesourcewithcloudexternalid
tags: ['SDK', 'Software Development Kit', 'Nonemployeesourcewithcloudexternalid', 'V1Nonemployeesourcewithcloudexternalid']
---

# Nonemployeesourcewithcloudexternalid

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee source id. | [optional] 
**SourceId** | Pointer to **string** | Source Id associated with this non-employee source. | [optional] 
**Name** | Pointer to **string** | Source name associated with this non-employee source. | [optional] 
**Description** | Pointer to **string** | Source description associated with this non-employee source. | [optional] 
**Approvers** | Pointer to [**[]Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) | List of approvers | [optional] 
**AccountManagers** | Pointer to [**[]Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) | List of account managers | [optional] 
**Modified** | Pointer to **SailPointTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 
**CloudExternalId** | Pointer to **string** | Legacy ID used for sources from the V1 API. This attribute will be removed from a future version of the API and will not be considered a breaking change. No clients should rely on this ID always being present. | [optional] 

## Methods

### NewNonemployeesourcewithcloudexternalid

`func NewNonemployeesourcewithcloudexternalid() *Nonemployeesourcewithcloudexternalid`

NewNonemployeesourcewithcloudexternalid instantiates a new Nonemployeesourcewithcloudexternalid object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeesourcewithcloudexternalidWithDefaults

`func NewNonemployeesourcewithcloudexternalidWithDefaults() *Nonemployeesourcewithcloudexternalid`

NewNonemployeesourcewithcloudexternalidWithDefaults instantiates a new Nonemployeesourcewithcloudexternalid object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeesourcewithcloudexternalid) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeesourcewithcloudexternalid) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeesourcewithcloudexternalid) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeesourcewithcloudexternalid) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *Nonemployeesourcewithcloudexternalid) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Nonemployeesourcewithcloudexternalid) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Nonemployeesourcewithcloudexternalid) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Nonemployeesourcewithcloudexternalid) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetName

`func (o *Nonemployeesourcewithcloudexternalid) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Nonemployeesourcewithcloudexternalid) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Nonemployeesourcewithcloudexternalid) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Nonemployeesourcewithcloudexternalid) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Nonemployeesourcewithcloudexternalid) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Nonemployeesourcewithcloudexternalid) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Nonemployeesourcewithcloudexternalid) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Nonemployeesourcewithcloudexternalid) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetApprovers

`func (o *Nonemployeesourcewithcloudexternalid) GetApprovers() []Nonemployeeidentityreferencewithid`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *Nonemployeesourcewithcloudexternalid) GetApproversOk() (*[]Nonemployeeidentityreferencewithid, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *Nonemployeesourcewithcloudexternalid) SetApprovers(v []Nonemployeeidentityreferencewithid)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *Nonemployeesourcewithcloudexternalid) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetAccountManagers

`func (o *Nonemployeesourcewithcloudexternalid) GetAccountManagers() []Nonemployeeidentityreferencewithid`

GetAccountManagers returns the AccountManagers field if non-nil, zero value otherwise.

### GetAccountManagersOk

`func (o *Nonemployeesourcewithcloudexternalid) GetAccountManagersOk() (*[]Nonemployeeidentityreferencewithid, bool)`

GetAccountManagersOk returns a tuple with the AccountManagers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountManagers

`func (o *Nonemployeesourcewithcloudexternalid) SetAccountManagers(v []Nonemployeeidentityreferencewithid)`

SetAccountManagers sets AccountManagers field to given value.

### HasAccountManagers

`func (o *Nonemployeesourcewithcloudexternalid) HasAccountManagers() bool`

HasAccountManagers returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeesourcewithcloudexternalid) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeesourcewithcloudexternalid) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeesourcewithcloudexternalid) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeesourcewithcloudexternalid) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeesourcewithcloudexternalid) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeesourcewithcloudexternalid) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeesourcewithcloudexternalid) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeesourcewithcloudexternalid) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCloudExternalId

`func (o *Nonemployeesourcewithcloudexternalid) GetCloudExternalId() string`

GetCloudExternalId returns the CloudExternalId field if non-nil, zero value otherwise.

### GetCloudExternalIdOk

`func (o *Nonemployeesourcewithcloudexternalid) GetCloudExternalIdOk() (*string, bool)`

GetCloudExternalIdOk returns a tuple with the CloudExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudExternalId

`func (o *Nonemployeesourcewithcloudexternalid) SetCloudExternalId(v string)`

SetCloudExternalId sets CloudExternalId field to given value.

### HasCloudExternalId

`func (o *Nonemployeesourcewithcloudexternalid) HasCloudExternalId() bool`

HasCloudExternalId returns a boolean if a field has been set.


