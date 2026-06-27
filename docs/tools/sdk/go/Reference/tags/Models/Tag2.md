---
id: v1-tag2
title: Tag2
pagination_label: Tag2
sidebar_label: Tag2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tag2', 'V1Tag2'] 
slug: /tools/sdk/go/tags/models/tag2
tags: ['SDK', 'Software Development Kit', 'Tag2', 'V1Tag2']
---

# Tag2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Tag id | [readonly] 
**Name** | **string** | Name of the tag. | 
**Created** | **SailPointTime** | Date the tag was created. | [readonly] 
**Modified** | **SailPointTime** | Date the tag was last modified. | [readonly] 
**TagCategoryRefs** | [**[]Tag2TagCategoryRefsInner**](tag2-tag-category-refs-inner) |  | [readonly] 

## Methods

### NewTag2

`func NewTag2(id string, name string, created SailPointTime, modified SailPointTime, tagCategoryRefs []Tag2TagCategoryRefsInner, ) *Tag2`

NewTag2 instantiates a new Tag2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTag2WithDefaults

`func NewTag2WithDefaults() *Tag2`

NewTag2WithDefaults instantiates a new Tag2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Tag2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Tag2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Tag2) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Tag2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Tag2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Tag2) SetName(v string)`

SetName sets Name field to given value.


### GetCreated

`func (o *Tag2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Tag2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Tag2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Tag2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Tag2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Tag2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetTagCategoryRefs

`func (o *Tag2) GetTagCategoryRefs() []Tag2TagCategoryRefsInner`

GetTagCategoryRefs returns the TagCategoryRefs field if non-nil, zero value otherwise.

### GetTagCategoryRefsOk

`func (o *Tag2) GetTagCategoryRefsOk() (*[]Tag2TagCategoryRefsInner, bool)`

GetTagCategoryRefsOk returns a tuple with the TagCategoryRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTagCategoryRefs

`func (o *Tag2) SetTagCategoryRefs(v []Tag2TagCategoryRefsInner)`

SetTagCategoryRefs sets TagCategoryRefs field to given value.



