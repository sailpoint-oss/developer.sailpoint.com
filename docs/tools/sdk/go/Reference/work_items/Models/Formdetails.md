---
id: v1-formdetails
title: Formdetails
pagination_label: Formdetails
sidebar_label: Formdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formdetails', 'V1Formdetails'] 
slug: /tools/sdk/go/workitems/models/formdetails
tags: ['SDK', 'Software Development Kit', 'Formdetails', 'V1Formdetails']
---

# Formdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | ID of the form | [optional] 
**Name** | Pointer to **NullableString** | Name of the form | [optional] 
**Title** | Pointer to **NullableString** | The form title | [optional] 
**Subtitle** | Pointer to **NullableString** | The form subtitle. | [optional] 
**TargetUser** | Pointer to **string** | The name of the user that should be shown this form | [optional] 
**Sections** | Pointer to [**[]Sectiondetails**](sectiondetails) | Sections of the form | [optional] 

## Methods

### NewFormdetails

`func NewFormdetails() *Formdetails`

NewFormdetails instantiates a new Formdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormdetailsWithDefaults

`func NewFormdetailsWithDefaults() *Formdetails`

NewFormdetailsWithDefaults instantiates a new Formdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Formdetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Formdetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Formdetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Formdetails) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *Formdetails) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Formdetails) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *Formdetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Formdetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Formdetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Formdetails) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Formdetails) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Formdetails) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetTitle

`func (o *Formdetails) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *Formdetails) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *Formdetails) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *Formdetails) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### SetTitleNil

`func (o *Formdetails) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *Formdetails) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetSubtitle

`func (o *Formdetails) GetSubtitle() string`

GetSubtitle returns the Subtitle field if non-nil, zero value otherwise.

### GetSubtitleOk

`func (o *Formdetails) GetSubtitleOk() (*string, bool)`

GetSubtitleOk returns a tuple with the Subtitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtitle

`func (o *Formdetails) SetSubtitle(v string)`

SetSubtitle sets Subtitle field to given value.

### HasSubtitle

`func (o *Formdetails) HasSubtitle() bool`

HasSubtitle returns a boolean if a field has been set.

### SetSubtitleNil

`func (o *Formdetails) SetSubtitleNil(b bool)`

 SetSubtitleNil sets the value for Subtitle to be an explicit nil

### UnsetSubtitle
`func (o *Formdetails) UnsetSubtitle()`

UnsetSubtitle ensures that no value is present for Subtitle, not even an explicit nil
### GetTargetUser

`func (o *Formdetails) GetTargetUser() string`

GetTargetUser returns the TargetUser field if non-nil, zero value otherwise.

### GetTargetUserOk

`func (o *Formdetails) GetTargetUserOk() (*string, bool)`

GetTargetUserOk returns a tuple with the TargetUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetUser

`func (o *Formdetails) SetTargetUser(v string)`

SetTargetUser sets TargetUser field to given value.

### HasTargetUser

`func (o *Formdetails) HasTargetUser() bool`

HasTargetUser returns a boolean if a field has been set.

### GetSections

`func (o *Formdetails) GetSections() []Sectiondetails`

GetSections returns the Sections field if non-nil, zero value otherwise.

### GetSectionsOk

`func (o *Formdetails) GetSectionsOk() (*[]Sectiondetails, bool)`

GetSectionsOk returns a tuple with the Sections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSections

`func (o *Formdetails) SetSections(v []Sectiondetails)`

SetSections sets Sections field to given value.

### HasSections

`func (o *Formdetails) HasSections() bool`

HasSections returns a boolean if a field has been set.


