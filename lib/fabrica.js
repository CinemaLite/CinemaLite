/*  Initializa Firebase con la configuración del proyecto. Revisa la
 * configuración en tu servidor de Firebase.  */
// @ts-ignore


/** Conexión al sistema de
 * autenticación de Firebase.
 *  @returns {
      import("./tiposFire").
      Auth} */
export function getAuth() {
  // @ts-ignore
  return firebase.auth();
}

/** Conexión al sistema de
 * storage de Firebase.
 *  @returns {
      import("./tiposFire").
      Storage} */
export function getStorage() {
  // @ts-ignore
  return firebase.storage();
}
