---
id: segment
title: Segment
pagination_label: Segment
sidebar_label: Segment
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Segment'] 
slug: /tools/sdk/go/beta/models/segment
tags: ['SDK', 'Software Development Kit', 'Segment']
---

# Segment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | The segment&#39;s ID. | [optional] 
**Name** |  Pointer to **string** | The segment&#39;s business name. | [optional] 
**Created** |  Pointer to **time.Time** | The time when the segment is created. | [optional] 
**Modified** |  Pointer to **time.Time** | The time when the segment is modified. | [optional] 
**Description** |  Pointer to **string** | The segment&#39;s optional description. | [optional] 
**Owner** |  Pointer to [**NullableOwnerReferenceSegments**](owner-reference-segments) |  | [optional] 
**VisibilityCriteria** |  Pointer to [**VisibilityCriteria**](visibility-criteria) |  | [optional] 
**Active** |  Pointer to **bool** | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [optional] [default to false]

## Methods

### NewSegment

`func NewSegment() *Segment`

NewSegment instantiates a new Segment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSegmentWithDefaults

`func NewSegmentWithDefaults() *Segment`

NewSegmentWithDefaults instantiates a new Segment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Segment) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Segment) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Segment) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Segment) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Segment) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Segment) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Segment) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Segment) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Segment) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Segment) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Segment) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Segment) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Segment) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Segment) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Segment) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Segment) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Segment) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Segment) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Segment) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Segment) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOwner

`func (o *Segment) GetOwner() OwnerReferenceSegments`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Segment) GetOwnerOk() (*OwnerReferenceSegments, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Segment) SetOwner(v OwnerReferenceSegments)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Segment) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *Segment) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Segment) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetVisibilityCriteria

`func (o *Segment) GetVisibilityCriteria() VisibilityCriteria`

GetVisibilityCriteria returns the VisibilityCriteria field if non-nil, zero value otherwise.

### GetVisibilityCriteriaOk

`func (o *Segment) GetVisibilityCriteriaOk() (*VisibilityCriteria, bool)`

GetVisibilityCriteriaOk returns a tuple with the VisibilityCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisibilityCriteria

`func (o *Segment) SetVisibilityCriteria(v VisibilityCriteria)`

SetVisibilityCriteria sets VisibilityCriteria field to given value.

### HasVisibilityCriteria

`func (o *Segment) HasVisibilityCriteria() bool`

HasVisibilityCriteria returns a boolean if a field has been set.

### GetActive

`func (o *Segment) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Segment) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Segment) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Segment) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to top]](#) 


