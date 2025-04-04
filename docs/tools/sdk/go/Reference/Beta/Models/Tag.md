---
id: beta-tag
title: Tag
pagination_label: Tag
sidebar_label: Tag
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tag', 'BetaTag'] 
slug: /tools/sdk/go/beta/models/tag
tags: ['SDK', 'Software Development Kit', 'Tag', 'BetaTag']
---

# Tag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Tag id | [readonly] 
**Name** | **string** | Name of the tag. | 
**Created** | **time.Time** | Date the tag was created. | [readonly] 
**Modified** | **time.Time** | Date the tag was last modified. | [readonly] 
**TagCategoryRefs** | [**[]TagTagCategoryRefsInner**](tag-tag-category-refs-inner) |  | [readonly] 

## Methods

### NewTag

`func NewTag(id string, name string, created time.Time, modified time.Time, tagCategoryRefs []TagTagCategoryRefsInner, ) *Tag`

NewTag instantiates a new Tag object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTagWithDefaults

`func NewTagWithDefaults() *Tag`

NewTagWithDefaults instantiates a new Tag object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Tag) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Tag) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Tag) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Tag) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Tag) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Tag) SetName(v string)`

SetName sets Name field to given value.


### GetCreated

`func (o *Tag) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Tag) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Tag) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Tag) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Tag) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Tag) SetModified(v time.Time)`

SetModified sets Modified field to given value.


### GetTagCategoryRefs

`func (o *Tag) GetTagCategoryRefs() []TagTagCategoryRefsInner`

GetTagCategoryRefs returns the TagCategoryRefs field if non-nil, zero value otherwise.

### GetTagCategoryRefsOk

`func (o *Tag) GetTagCategoryRefsOk() (*[]TagTagCategoryRefsInner, bool)`

GetTagCategoryRefsOk returns a tuple with the TagCategoryRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTagCategoryRefs

`func (o *Tag) SetTagCategoryRefs(v []TagTagCategoryRefsInner)`

SetTagCategoryRefs sets TagCategoryRefs field to given value.



