---
id: work-items-form
title: WorkItemsForm
pagination_label: WorkItemsForm
sidebar_label: WorkItemsForm
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkItemsForm', 'WorkItemsForm'] 
slug: /tools/sdk/go/v3/models/work-items-form
tags: ['SDK', 'Software Development Kit', 'WorkItemsForm', 'WorkItemsForm']
---

# WorkItemsForm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | ID of the form | [optional] 
**Name** | Pointer to **NullableString** | Name of the form | [optional] 
**Title** | Pointer to **string** | The form title | [optional] 
**Subtitle** | Pointer to **string** | The form subtitle. | [optional] 
**TargetUser** | Pointer to **string** | The name of the user that should be shown this form | [optional] 
**Sections** | Pointer to [**[]SectionDetails**](section-details) | Sections of the form | [optional] 

## Methods

### NewWorkItemsForm

`func NewWorkItemsForm() *WorkItemsForm`

NewWorkItemsForm instantiates a new WorkItemsForm object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkItemsFormWithDefaults

`func NewWorkItemsFormWithDefaults() *WorkItemsForm`

NewWorkItemsFormWithDefaults instantiates a new WorkItemsForm object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkItemsForm) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkItemsForm) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkItemsForm) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkItemsForm) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *WorkItemsForm) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *WorkItemsForm) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *WorkItemsForm) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkItemsForm) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkItemsForm) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkItemsForm) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *WorkItemsForm) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *WorkItemsForm) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetTitle

`func (o *WorkItemsForm) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *WorkItemsForm) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *WorkItemsForm) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *WorkItemsForm) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetSubtitle

`func (o *WorkItemsForm) GetSubtitle() string`

GetSubtitle returns the Subtitle field if non-nil, zero value otherwise.

### GetSubtitleOk

`func (o *WorkItemsForm) GetSubtitleOk() (*string, bool)`

GetSubtitleOk returns a tuple with the Subtitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtitle

`func (o *WorkItemsForm) SetSubtitle(v string)`

SetSubtitle sets Subtitle field to given value.

### HasSubtitle

`func (o *WorkItemsForm) HasSubtitle() bool`

HasSubtitle returns a boolean if a field has been set.

### GetTargetUser

`func (o *WorkItemsForm) GetTargetUser() string`

GetTargetUser returns the TargetUser field if non-nil, zero value otherwise.

### GetTargetUserOk

`func (o *WorkItemsForm) GetTargetUserOk() (*string, bool)`

GetTargetUserOk returns a tuple with the TargetUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetUser

`func (o *WorkItemsForm) SetTargetUser(v string)`

SetTargetUser sets TargetUser field to given value.

### HasTargetUser

`func (o *WorkItemsForm) HasTargetUser() bool`

HasTargetUser returns a boolean if a field has been set.

### GetSections

`func (o *WorkItemsForm) GetSections() []SectionDetails`

GetSections returns the Sections field if non-nil, zero value otherwise.

### GetSectionsOk

`func (o *WorkItemsForm) GetSectionsOk() (*[]SectionDetails, bool)`

GetSectionsOk returns a tuple with the Sections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSections

`func (o *WorkItemsForm) SetSections(v []SectionDetails)`

SetSections sets Sections field to given value.

### HasSections

`func (o *WorkItemsForm) HasSections() bool`

HasSections returns a boolean if a field has been set.


