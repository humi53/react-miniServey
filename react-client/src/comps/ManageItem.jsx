const ManageItem = (props) => {
  const { item, selectItemHandler } = props;
  const onclickHandler = (e, sub_seq) => {
    selectItemHandler(sub_seq);
  };
  return (
    <tr onClick={(e) => onclickHandler(e, item.sub_seq)}>
      <td>{item.sub_seq}</td>
      <td>{item.sub_title}</td>
    </tr>
  );
};
export default ManageItem;
