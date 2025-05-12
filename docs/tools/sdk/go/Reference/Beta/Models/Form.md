---
id: beta-form
title: Form
pagination_label: Form
sidebar_label: Form
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Form', 'BetaForm'] 
slug: /tools/sdk/go/beta/models/form
tags: ['SDK', 'Software Development Kit', 'Form', 'BetaForm']
---

# Form

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | ID of the form | [optional] 
**Name** | Pointer to **NullableString** | Name of the form | [optional] 
**Title** | Pointer to **string** | The form title | [optional] 
**Subtitle** | Pointer to **string** | The form subtitle. | [optional] 
**TargetUser** | Pointer to **string** | The name of the user that should be shown this form | [optional] 
**Sections** | Pointer to [**[]SectionDetails**](section-details) |  | [optional] 

## Methods

### NewForm

`func NewForm() *Form`

NewForm instantiates a new Form object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormWithDefaults

`func NewFormWithDefaults() *Form`

NewFormWithDefaults instantiates a new Form object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Form) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Form) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Form) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Form) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *Form) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Form) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *Form) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Form) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Form) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Form) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Form) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Form) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetTitle

`func (o *Form) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *Form) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *Form) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *Form) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetSubtitle

`func (o *Form) GetSubtitle() string`

GetSubtitle returns the Subtitle field if non-nil, zero value otherwise.

### GetSubtitleOk

`func (o *Form) GetSubtitleOk() (*string, bool)`

GetSubtitleOk returns a tuple with the Subtitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtitle

`func (o *Form) SetSubtitle(v string)`

SetSubtitle sets Subtitle field to given value.

### HasSubtitle

`func (o *Form) HasSubtitle() bool`

HasSubtitle returns a boolean if a field has been set.

### GetTargetUser

`func (o *Form) GetTargetUser() string`

GetTargetUser returns the TargetUser field if non-nil, zero value otherwise.

### GetTargetUserOk

`func (o *Form) GetTargetUserOk() (*string, bool)`

GetTargetUserOk returns a tuple with the TargetUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetUser

`func (o *Form) SetTargetUser(v string)`

SetTargetUser sets TargetUser field to given value.

### HasTargetUser

`func (o *Form) HasTargetUser() bool`

HasTargetUser returns a boolean if a field has been set.

### GetSections

`func (o *Form) GetSections() []SectionDetails`

GetSections returns the Sections field if non-nil, zero value otherwise.

### GetSectionsOk

`func (o *Form) GetSectionsOk() (*[]SectionDetails, bool)`

GetSectionsOk returns a tuple with the Sections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSections

`func (o *Form) SetSections(v []SectionDetails)`

SetSections sets Sections field to given value.

### HasSections

`func (o *Form) HasSections() bool`

HasSections returns a boolean if a field has been set.


