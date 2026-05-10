function withAuth(WrappedComponent) {
  return (props) => {
    const locale = getCurrentLocale(); // Получение текущей локали.
    const localizedContent = getLocalizedContent(locale);
    return <WrappedComponent {...props} localizedContent={localizedContent}/>;
  };
}

export default withAuth