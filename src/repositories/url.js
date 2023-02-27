class UrlRepository {
  static records = [];

  static retrieve(code) {
    return UrlRepository.records?.find((item) => item.code === code);
  }

  static save(code, url) {
    const record = { code, url, delivered: false };
    UrlRepository.records.push(record);
    return code;
  }

  static markDelivered(url) {
    return UrlRepository.records?.find((item) => ({
      ...item.url,
      delivered: (item.delivered = true),
    }));
  }
}

module.exports = UrlRepository;
