# TemplateDto

# TemplateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | `string` | The key of the template | [default to undefined]
**name** | **(optional)** `string` | The name of the Task Manager Subscription | [default to undefined]
**medium** | `string` | The message medium. More mediums may be added in the future. | [default to undefined]
**locale** | `string` | The locale for the message text, a BCP 47 language tag. | [default to undefined]
**subject** | **(optional)** `string` | The subject line in the template | [default to undefined]
**header** | **(optional)** `string` | The header value is now located within the body field. If included with non-null values, will result in a 400. | [default to undefined]
**body** | **(optional)** `string` | The body in the template | [default to undefined]
**footer** | **(optional)** `string` | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [default to undefined]
**from** | **(optional)** `string` | The \"From:\" address in the template | [default to undefined]
**replyTo** | **(optional)** `string` | The \"Reply To\" line in the template | [default to undefined]
**description** | **(optional)** `string` | The description in the template | [default to undefined]
**id** | **(optional)** `string` | This is auto-generated. | [default to undefined]
**created** | **(optional)** `string` | The time when this template is created. This is auto-generated. | [default to undefined]
**modified** | **(optional)** `string` | The time when this template was last modified. This is auto-generated. | [default to undefined]
**slackTemplate** | **(optional)** `TemplateDtoSlackTemplate` |  | [default to undefined]
**teamsTemplate** | **(optional)** `TemplateDtoTeamsTemplate` |  | [default to undefined]

