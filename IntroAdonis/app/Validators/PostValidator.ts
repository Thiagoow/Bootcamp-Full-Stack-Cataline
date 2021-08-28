import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }) /* trim -> 
	Remove o espaçamento no começo e no fim:*/,
    body: schema.string({ trim: true }),
    /*Se eu quisesse que essa coluna devesse ser única
	 e dar uma mnsg mais personalizada, bastava add uma 
	 vírgula dps do ({trim: true}) e a linha de comando:

	[rules.unique({table: 'posts', column: 'body'})])
	*/
  })

  /* Se eu quiser personalizar uma mensagem a 
  partir de uma rule: */
  public messages = {
    required: 'O campo {{ field }} é obrigatório!',
  }
}
