---
id: form-details
title: FormDetails
pagination_label: FormDetails
sidebar_label: FormDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormDetails', 'FormDetails'] 
slug: /tools/sdk/go/v3/models/form-details
tags: ['SDK', 'Software Development Kit', 'FormDetails', 'FormDetails']
---

# FormDetails

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

### NewFormDetails

`func NewFormDetails() *FormDetails`

NewFormDetails instantiates a new FormDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormDetailsWithDefaults

`func NewFormDetailsWithDefaults() *FormDetails`

NewFormDetailsWithDefaults instantiates a new FormDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *FormDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FormDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FormDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FormDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *FormDetails) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *FormDetails) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *FormDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FormDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FormDetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FormDetails) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *FormDetails) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *FormDetails) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetTitle

`func (o *FormDetails) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *FormDetails) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *FormDetails) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *FormDetails) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetSubtitle

`func (o *FormDetails) GetSubtitle() string`

GetSubtitle returns the Subtitle field if non-nil, zero value otherwise.

### GetSubtitleOk

`func (o *FormDetails) GetSubtitleOk() (*string, bool)`

GetSubtitleOk returns a tuple with the Subtitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtitle

`func (o *FormDetails) SetSubtitle(v string)`

SetSubtitle sets Subtitle field to given value.

### HasSubtitle

`func (o *FormDetails) HasSubtitle() bool`

HasSubtitle returns a boolean if a field has been set.

### GetTargetUser

`func (o *FormDetails) GetTargetUser() string`

GetTargetUser returns the TargetUser field if non-nil, zero value otherwise.

### GetTargetUserOk

`func (o *FormDetails) GetTargetUserOk() (*string, bool)`

GetTargetUserOk returns a tuple with the TargetUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetUser

`func (o *FormDetails) SetTargetUser(v string)`

SetTargetUser sets TargetUser field to given value.

### HasTargetUser

`func (o *FormDetails) HasTargetUser() bool`

HasTargetUser returns a boolean if a field has been set.

### GetSections

`func (o *FormDetails) GetSections() []SectionDetails`

GetSections returns the Sections field if non-nil, zero value otherwise.

### GetSectionsOk

`func (o *FormDetails) GetSectionsOk() (*[]SectionDetails, bool)`

GetSectionsOk returns a tuple with the Sections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSections

`func (o *FormDetails) SetSections(v []SectionDetails)`

SetSections sets Sections field to given value.

### HasSections

`func (o *FormDetails) HasSections() bool`

HasSections returns a boolean if a field has been set.


