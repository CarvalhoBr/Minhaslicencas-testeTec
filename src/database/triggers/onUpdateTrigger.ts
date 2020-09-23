export default function onUpdateTrigger(table: string){ 
    return(
    `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE set_updated_timestamp();
  `)
}