---
id: v1-templatedtodefault
title: Templatedtodefault
pagination_label: Templatedtodefault
sidebar_label: Templatedtodefault
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Templatedtodefault', 'V1Templatedtodefault'] 
slug: /tools/sdk/go/notifications/models/templatedtodefault
tags: ['SDK', 'Software Development Kit', 'Templatedtodefault', 'V1Templatedtodefault']
---

# Templatedtodefault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The key of the default template | [optional] 
**Name** | Pointer to **string** | The name of the default template | [optional] 
**Medium** | Pointer to **string** | The message medium. More mediums may be added in the future. | [optional] 
**Locale** | Pointer to **string** | The locale for the message text, a BCP 47 language tag. | [optional] 
**Subject** | Pointer to **NullableString** | The subject of the default template | [optional] 
**Header** | Pointer to **NullableString** | The header value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**Body** | Pointer to **string** | The body of the default template | [optional] 
**Footer** | Pointer to **NullableString** | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**From** | Pointer to **NullableString** | The \"From:\" address of the default template | [optional] 
**ReplyTo** | Pointer to **NullableString** | The \"Reply To\" field of the default template | [optional] 
**Description** | Pointer to **NullableString** | The description of the default template | [optional] 
**SlackTemplate** | Pointer to [**NullableTemplateslack**](templateslack) |  | [optional] 
**TeamsTemplate** | Pointer to [**NullableTemplateteams**](templateteams) |  | [optional] 

## Methods

### NewTemplatedtodefault

`func NewTemplatedtodefault() *Templatedtodefault`

NewTemplatedtodefault instantiates a new Templatedtodefault object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplatedtodefaultWithDefaults

`func NewTemplatedtodefaultWithDefaults() *Templatedtodefault`

NewTemplatedtodefaultWithDefaults instantiates a new Templatedtodefault object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Templatedtodefault) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Templatedtodefault) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Templatedtodefault) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Templatedtodefault) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetName

`func (o *Templatedtodefault) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Templatedtodefault) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Templatedtodefault) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Templatedtodefault) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMedium

`func (o *Templatedtodefault) GetMedium() string`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *Templatedtodefault) GetMediumOk() (*string, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *Templatedtodefault) SetMedium(v string)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *Templatedtodefault) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetLocale

`func (o *Templatedtodefault) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *Templatedtodefault) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *Templatedtodefault) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *Templatedtodefault) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### GetSubject

`func (o *Templatedtodefault) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *Templatedtodefault) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *Templatedtodefault) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *Templatedtodefault) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### SetSubjectNil

`func (o *Templatedtodefault) SetSubjectNil(b bool)`

 SetSubjectNil sets the value for Subject to be an explicit nil

### UnsetSubject
`func (o *Templatedtodefault) UnsetSubject()`

UnsetSubject ensures that no value is present for Subject, not even an explicit nil
### GetHeader

`func (o *Templatedtodefault) GetHeader() string`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *Templatedtodefault) GetHeaderOk() (*string, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *Templatedtodefault) SetHeader(v string)`

SetHeader sets Header field to given value.

### HasHeader

`func (o *Templatedtodefault) HasHeader() bool`

HasHeader returns a boolean if a field has been set.

### SetHeaderNil

`func (o *Templatedtodefault) SetHeaderNil(b bool)`

 SetHeaderNil sets the value for Header to be an explicit nil

### UnsetHeader
`func (o *Templatedtodefault) UnsetHeader()`

UnsetHeader ensures that no value is present for Header, not even an explicit nil
### GetBody

`func (o *Templatedtodefault) GetBody() string`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *Templatedtodefault) GetBodyOk() (*string, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *Templatedtodefault) SetBody(v string)`

SetBody sets Body field to given value.

### HasBody

`func (o *Templatedtodefault) HasBody() bool`

HasBody returns a boolean if a field has been set.

### GetFooter

`func (o *Templatedtodefault) GetFooter() string`

GetFooter returns the Footer field if non-nil, zero value otherwise.

### GetFooterOk

`func (o *Templatedtodefault) GetFooterOk() (*string, bool)`

GetFooterOk returns a tuple with the Footer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFooter

`func (o *Templatedtodefault) SetFooter(v string)`

SetFooter sets Footer field to given value.

### HasFooter

`func (o *Templatedtodefault) HasFooter() bool`

HasFooter returns a boolean if a field has been set.

### SetFooterNil

`func (o *Templatedtodefault) SetFooterNil(b bool)`

 SetFooterNil sets the value for Footer to be an explicit nil

### UnsetFooter
`func (o *Templatedtodefault) UnsetFooter()`

UnsetFooter ensures that no value is present for Footer, not even an explicit nil
### GetFrom

`func (o *Templatedtodefault) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *Templatedtodefault) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *Templatedtodefault) SetFrom(v string)`

SetFrom sets From field to given value.

### HasFrom

`func (o *Templatedtodefault) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### SetFromNil

`func (o *Templatedtodefault) SetFromNil(b bool)`

 SetFromNil sets the value for From to be an explicit nil

### UnsetFrom
`func (o *Templatedtodefault) UnsetFrom()`

UnsetFrom ensures that no value is present for From, not even an explicit nil
### GetReplyTo

`func (o *Templatedtodefault) GetReplyTo() string`

GetReplyTo returns the ReplyTo field if non-nil, zero value otherwise.

### GetReplyToOk

`func (o *Templatedtodefault) GetReplyToOk() (*string, bool)`

GetReplyToOk returns a tuple with the ReplyTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplyTo

`func (o *Templatedtodefault) SetReplyTo(v string)`

SetReplyTo sets ReplyTo field to given value.

### HasReplyTo

`func (o *Templatedtodefault) HasReplyTo() bool`

HasReplyTo returns a boolean if a field has been set.

### SetReplyToNil

`func (o *Templatedtodefault) SetReplyToNil(b bool)`

 SetReplyToNil sets the value for ReplyTo to be an explicit nil

### UnsetReplyTo
`func (o *Templatedtodefault) UnsetReplyTo()`

UnsetReplyTo ensures that no value is present for ReplyTo, not even an explicit nil
### GetDescription

`func (o *Templatedtodefault) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Templatedtodefault) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Templatedtodefault) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Templatedtodefault) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Templatedtodefault) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Templatedtodefault) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSlackTemplate

`func (o *Templatedtodefault) GetSlackTemplate() Templateslack`

GetSlackTemplate returns the SlackTemplate field if non-nil, zero value otherwise.

### GetSlackTemplateOk

`func (o *Templatedtodefault) GetSlackTemplateOk() (*Templateslack, bool)`

GetSlackTemplateOk returns a tuple with the SlackTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlackTemplate

`func (o *Templatedtodefault) SetSlackTemplate(v Templateslack)`

SetSlackTemplate sets SlackTemplate field to given value.

### HasSlackTemplate

`func (o *Templatedtodefault) HasSlackTemplate() bool`

HasSlackTemplate returns a boolean if a field has been set.

### SetSlackTemplateNil

`func (o *Templatedtodefault) SetSlackTemplateNil(b bool)`

 SetSlackTemplateNil sets the value for SlackTemplate to be an explicit nil

### UnsetSlackTemplate
`func (o *Templatedtodefault) UnsetSlackTemplate()`

UnsetSlackTemplate ensures that no value is present for SlackTemplate, not even an explicit nil
### GetTeamsTemplate

`func (o *Templatedtodefault) GetTeamsTemplate() Templateteams`

GetTeamsTemplate returns the TeamsTemplate field if non-nil, zero value otherwise.

### GetTeamsTemplateOk

`func (o *Templatedtodefault) GetTeamsTemplateOk() (*Templateteams, bool)`

GetTeamsTemplateOk returns a tuple with the TeamsTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamsTemplate

`func (o *Templatedtodefault) SetTeamsTemplate(v Templateteams)`

SetTeamsTemplate sets TeamsTemplate field to given value.

### HasTeamsTemplate

`func (o *Templatedtodefault) HasTeamsTemplate() bool`

HasTeamsTemplate returns a boolean if a field has been set.

### SetTeamsTemplateNil

`func (o *Templatedtodefault) SetTeamsTemplateNil(b bool)`

 SetTeamsTemplateNil sets the value for TeamsTemplate to be an explicit nil

### UnsetTeamsTemplate
`func (o *Templatedtodefault) UnsetTeamsTemplate()`

UnsetTeamsTemplate ensures that no value is present for TeamsTemplate, not even an explicit nil

