---
id: v1-list-workgroup-members-v1200-response-inner
title: ListWorkgroupMembersV1200ResponseInner
pagination_label: ListWorkgroupMembersV1200ResponseInner
sidebar_label: ListWorkgroupMembersV1200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListWorkgroupMembersV1200ResponseInner', 'V1ListWorkgroupMembersV1200ResponseInner'] 
slug: /tools/sdk/go/governancegroups/models/list-workgroup-members-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListWorkgroupMembersV1200ResponseInner', 'V1ListWorkgroupMembersV1200ResponseInner']
---

# ListWorkgroupMembersV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Workgroup member identity DTO type. | [optional] 
**Id** | Pointer to **string** | Workgroup member identity ID. | [optional] 
**Name** | Pointer to **string** | Workgroup member identity display name. | [optional] 
**Email** | Pointer to **string** | Workgroup member identity email. | [optional] 

## Methods

### NewListWorkgroupMembersV1200ResponseInner

`func NewListWorkgroupMembersV1200ResponseInner() *ListWorkgroupMembersV1200ResponseInner`

NewListWorkgroupMembersV1200ResponseInner instantiates a new ListWorkgroupMembersV1200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListWorkgroupMembersV1200ResponseInnerWithDefaults

`func NewListWorkgroupMembersV1200ResponseInnerWithDefaults() *ListWorkgroupMembersV1200ResponseInner`

NewListWorkgroupMembersV1200ResponseInnerWithDefaults instantiates a new ListWorkgroupMembersV1200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ListWorkgroupMembersV1200ResponseInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ListWorkgroupMembersV1200ResponseInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ListWorkgroupMembersV1200ResponseInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ListWorkgroupMembersV1200ResponseInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ListWorkgroupMembersV1200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ListWorkgroupMembersV1200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ListWorkgroupMembersV1200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ListWorkgroupMembersV1200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ListWorkgroupMembersV1200ResponseInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ListWorkgroupMembersV1200ResponseInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ListWorkgroupMembersV1200ResponseInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ListWorkgroupMembersV1200ResponseInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *ListWorkgroupMembersV1200ResponseInner) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ListWorkgroupMembersV1200ResponseInner) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ListWorkgroupMembersV1200ResponseInner) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ListWorkgroupMembersV1200ResponseInner) HasEmail() bool`

HasEmail returns a boolean if a field has been set.


